import { Module } from '@nestjs/common';
import { LocalController } from './local.controller';
import { LocalService } from './local.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CatSchema } from './schemas/cat.schema';

/**
 * 本地服务模块
 */
@Module({
	imports: [
		MongooseModule.forFeature([{ name: 'Cat', schema: CatSchema }])
	],
	controllers: [LocalController],
	providers: [LocalService]
})
export class LocalModule {
	constructor() {
		// hole
	}
}
