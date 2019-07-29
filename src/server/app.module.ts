import { Module } from '@nestjs/common';
import { CatsModule } from './modules/cats/cats.module';
// tslint:disable-next-line: ordered-imports
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
