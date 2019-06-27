import { Controller, HttpCode, All, HttpStatus } from '@nestjs/common';
import { LocalService } from './local.services';
import { Routers } from '../../routers/routers';

/**
 * 配置获取服务
 */
@Controller(Routers.LOCAL_MODULE_ROUTER)
export class LocalController {
    constructor(private readonly localService: LocalService) {
        // hole
    }

    /**
     * 获取Host配置信息
     * @returns {*}
     * @memberof ConfigController
     */
    @HttpCode(HttpStatus.OK)
    @All('getHostConfig')
    public getHostConfig(): any {
        const config: any = this.localService.getHostConfig();

        return {
            success: true,
            code: HttpStatus.OK,
            data: config,
            message: '请求成功',
        };
    }
}
