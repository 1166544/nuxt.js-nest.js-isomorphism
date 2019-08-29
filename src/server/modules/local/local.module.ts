import { Module } from '@nestjs/common';
import { LocalController } from './local.controller';
import { LocalService } from './local.service';

/**
 * 本地服务模块
 */
@Module({
	imports: [],
	controllers: [LocalController],
	providers: [LocalService]
})
export class LocalModule {
	constructor() {
		// hole
	}
}
