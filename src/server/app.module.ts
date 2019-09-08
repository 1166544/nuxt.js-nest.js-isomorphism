import { Module } from '@nestjs/common';
import { CatsModule } from './modules/cats/cats.module';
import { TransportModule } from './modules/transport/transport.module';
import { AppController } from './app.controller';
import { LocalModule } from './modules/local/local.module';
import { MongooseModule } from '@nestjs/mongoose';

/**
 * App Module
 *
 * @export
 * @class ApplicationModule
 */
@Module({
	imports: [
		MongooseModule.forRoot('mongodb://admin:123456@localhost:27017/admin'),
		CatsModule,
		TransportModule,
		LocalModule
	],
	controllers: [AppController]
})
export class ApplicationModule { }
