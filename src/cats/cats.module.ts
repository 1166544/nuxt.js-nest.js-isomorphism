import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';

/**
 * Cats Module
 *
 * @export
 * @class CatsModule
 */
@Module({
	controllers: [CatsController],
	providers: [CatsService]
})
export class CatsModule { }
