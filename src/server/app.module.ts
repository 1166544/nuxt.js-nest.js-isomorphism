import { Module } from '@nestjs/common';
import { CatsModule } from './modules/cats/cats.module';
import { TransportModule } from './modules/transport/transport.module';
import { AppController } from './app.controller';
import { LocalModule } from './modules/local/local.module';

/**
 * App Module
 *
 * @export
 * @class ApplicationModule
 */
@Module({
	imports: [
		CatsModule,
		TransportModule,
		LocalModule
	],
	controllers: [AppController]
})
export class ApplicationModule { }
