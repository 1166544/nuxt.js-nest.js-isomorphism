import { Module } from '@nestjs/common';
import { LocalController } from './local.controller';
import { LocalService } from './local.services';

/**
 * 配置信息获取
 * @export
 * @class ConfigModule
 */
@Module({
    exports: [LocalService],
    controllers: [LocalController],
    providers: [LocalService],
})
export class LocalModule {
    constructor() {
        // hole
    }
}
