import { Module } from '@nestjs/common';
import { LocalController } from './LocalController';
import { LocalService } from './LocalService';
import { DataBaseModule } from '../db/DBModule';
import { localProviders } from './LocalProviders';

/**
 * 本地服务模块
 */
@Module({
	imports: [DataBaseModule],
	controllers: [LocalController],
	providers: [LocalService, ...localProviders]
})
export class LocalModule {
	constructor() {
		// hole
	}
}
