import { Module } from '@nestjs/common';
import { CatsModule } from './cats/cats.module';

/**
 * App Module
 *
 * @export
 * @class ApplicationModule
 */
@Module({
	imports: [CatsModule]
})
export class ApplicationModule { }
