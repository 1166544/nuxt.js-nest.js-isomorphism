import {
    ArgumentsHost,
    Catch,
    ExceptionFilter,
    HttpStatus,
    Logger,
} from '@nestjs/common';

/**
 * HTTP错误过滤
 *
 * @export
 * @class HttpErrorFilter
 * @implements {ExceptionFilter}
 */
@Catch()
export class HttpErrorFilter implements ExceptionFilter {
    /**
     * 异常拦截
     * @param exception
     * @param host
     */
    public catch(exception: any, host: ArgumentsHost): void {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const request = ctx.getRequest();
        let status = exception.getStatus
            ? exception.getStatus()
            : HttpStatus.INTERNAL_SERVER_ERROR;
        let cathStatus = null;
        let exceptionData = null;
        if (exception.response) {
            const exceptionResponse = exception.response;
            cathStatus = exception.response.status;
            if (exceptionResponse) {
                exceptionData = exceptionResponse.data;
            }
        }
        if (cathStatus) {
            status = cathStatus;
        }
        const errorResponse = {
            code: status,
            success: false,
            timestamp: new Date().toLocaleDateString(),
            path: request.url,
            response: exception.response,
            method: request.method,
            exceptionData,
            message:
                status !== HttpStatus.INTERNAL_SERVER_ERROR
                    ? exception.message.error || exception.message || null
                    : 'Internal server error',
        };

        if (status === HttpStatus.INTERNAL_SERVER_ERROR) {
            Logger.error(
                `${request.method} ${request.url}`,
                exception.stack,
                'ExceptionFilter',
            );
        } else {
            const errorInfo: string = `${errorResponse.message}
            ${errorResponse.exceptionData}`;
            Logger.error(
                `${request.method} ${request.url}`,
                errorInfo,
                'ExceptionFilter',
            );
        }

        response.status(status).json({
            code: status,
            success: false,
            message: errorResponse.message,
            errors: errorResponse.exceptionData,
            statusCode: status,
            timestamp: errorResponse.timestamp,
            path: errorResponse.path,
        });
    }
}
