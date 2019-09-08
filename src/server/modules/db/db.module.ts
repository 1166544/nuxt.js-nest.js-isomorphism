import { Module } from '@nestjs/common';
import { databaseProviders } from './db.providers';

/**
 * database module
 * @description Module
 */
@Module({
	providers: [...databaseProviders],
	exports: [...databaseProviders]
})
export class DataBaseModule {
	// hole
}
