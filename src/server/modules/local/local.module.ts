import { Module } from '@nestjs/common';
import { LocalController } from './local.controller';
import { LocalService } from './local.service';
import { DataBaseModule } from '../db/db.module';
import { catsProviders } from './local.providers';

/**
 * 本地服务模块
 */
@Module({
	imports: [DataBaseModule],
	controllers: [LocalController],
	providers: [LocalService, ...catsProviders]
})
export class LocalModule {
	constructor() {
		// hole
	}
}
