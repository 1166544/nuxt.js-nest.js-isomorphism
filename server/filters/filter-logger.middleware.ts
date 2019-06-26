import { Injectable, NestMiddleware, MiddlewareFunction } from '@nestjs/common';

/**
 * HTTP头部重写
 *
 * @export
 * @class FilterLoggerMiddleware
 * @implements {NestMiddleware}
 */
@Injectable()
export class FilterLoggerMiddleware implements NestMiddleware {
    /**
     * 头部拦截
     *
     * @param {...any[]} args
     * @returns {MiddlewareFunction}
     * @memberof FilterLoggerMiddleware
     */
    public resolve(...args: any[]): MiddlewareFunction {
        return (req: any, res: any, next) => {
            res.setHeader('X-Powered-By', 'AircraftEngine');
            next();
        };
    }
}
