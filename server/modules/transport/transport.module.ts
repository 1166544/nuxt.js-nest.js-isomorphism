import { Module } from '@nestjs/common';
import { CoreModule } from '../../core/core.module';
import { TransportController } from './transport.controller';
import { TransportService } from './transport.services';

/**
 * 中转模块
 */
@Module({
    imports: [],
    controllers: [TransportController],
    providers: [TransportService],
})
export class TransportModule extends CoreModule {
    constructor() {
        super();
    }
}
