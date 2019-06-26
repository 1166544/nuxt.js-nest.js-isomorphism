/**
 * 路由总表
 *
 * @export
 * @class Routers
 */
export class Routers {
    /**
     * 中转服务，将通过/api/transport/....方式访问
     */
    public static TRANSPORT_MODULE_ROUTER: string = 'transport';

    /**
     * local配置服务，将通过/api/local/....方式访问
     */
    public static LOCAL_MODULE_ROUTER: string = 'local';
}
