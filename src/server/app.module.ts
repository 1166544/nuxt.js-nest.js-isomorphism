import { Module } from '@nestjs/common';
import { CatsModule } from './modules/cats/cats.module';
import { TransportModule } from './modules/transport/transport.module';
import { AppController } from './app.controller';

/**
 * App Module
 *
 * @export
 * @class ApplicationModule
 */
@Module({
	imports: [CatsModule, TransportModule],
	controllers: [AppController]
})
export class ApplicationModule { }
