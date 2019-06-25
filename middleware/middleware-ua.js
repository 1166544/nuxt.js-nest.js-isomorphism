/**
 * 手动更改在服务端渲染时UA信息
 * @param {*} context
 */
export default function( context ) {
    let newUaInfo = '';

    if (process.server) {
        // 服务端
        newUaInfo = `${context.req.headers['user-agent']}  ExtClient`;
    } else {
        // 浏览器端
        newUaInfo = navigator.userAgent;
    }

    context.userAgent = newUaInfo;
}
