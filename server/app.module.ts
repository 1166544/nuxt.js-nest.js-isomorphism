import { Module } from '@nestjs/common';
import { CatsModule } from './cats/cats.module';
import { AppController } from './app.controller';

/**
 * App Module
 *
 * @export
 * @class ApplicationModule
 */
@Module({
	imports: [CatsModule],
	controllers: [AppController]
})
export class ApplicationModule { }
