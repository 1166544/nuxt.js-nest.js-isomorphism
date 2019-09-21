import { Module } from '@nestjs/common';
import { CatsModule } from './modules/cats/CatsModule';
import { TransportModule } from './modules/transport/TransportModule';
import { AppController } from './AppController';
import { LocalModule } from './modules/local/LocalModule';

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
