import { Module } from '@nestjs/common';
import { AppController } from './application.controller';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [],
})
export class ApplicationModule {}
