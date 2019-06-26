import { Get, Controller } from '@nestjs/common';
import { AppService } from './app.service';

/**
 * APP控制器
 *
 * @export
 * @class AppController
 */
@Controller()
export class AppController {
    constructor(private readonly appService: AppService) { }

    /**
     * ROOT
     */
    @Get()
    public root(): string {
        return this.appService.root();
    }
}
