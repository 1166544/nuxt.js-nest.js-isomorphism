import {
    ArgumentsHost,
    Catch,
    ExceptionFilter,
    HttpException,
    HttpStatus,
} from '@nestjs/common';

/**
 * HTTP异常拦截
 */
@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
    constructor(configer: any) {
        // hole
    }

    /**
     * 异常捕获
     *
     * @param {*} error
     * @param {ArgumentsHost} host
     * @memberof HttpExceptionFilter
     */
    public catch(error: any, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const res = ctx.getResponse();
        const req = ctx.getRequest();
        const MSEEAGE_STR = 'message';

        if (error.getStatus() === HttpStatus.UNAUTHORIZED) {
            if (typeof error.response !== 'string') {
                error.response[MSEEAGE_STR] =
                    error.response.message ||
                    'You do not have permission to access this resource';
            }
        }

        res.status(error.getStatus()).json({
            code: error.getStatus(),
            success: false,
            statusCode: error.getStatus(),
            error: error.response.name || error.response.error || error.name,
            message: error.response.message || error.response || error.message,
            errors: error.response.errors || null,
            timestamp: new Date().toISOString(),
            path: req ? req.url : null,
        });
    }
}
