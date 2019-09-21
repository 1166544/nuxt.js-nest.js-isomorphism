import { Module } from '@nestjs/common';
import { TransportController } from './TransportController';
import { TransportService } from './TransportService';

/**
 * 中转模块
 */
@Module({
	imports: [],
	controllers: [TransportController],
	providers: [TransportService]
})
export class TransportModule {
	constructor() {
		// hole
	}
}
