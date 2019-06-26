import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { LocalModule } from './modules/local/local.module';
import { TransportModule } from './modules/transport/transport.module';
import { AppService } from './app.service';

/**
 * APP服务主模块入口
 */
@Module({
    imports: [LocalModule, TransportModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
    // hole
}
