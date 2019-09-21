import { Module } from '@nestjs/common';
import { databaseProviders } from './DBProviders';

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
