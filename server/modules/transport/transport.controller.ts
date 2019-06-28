import {
    All,
    Get,
    Controller,
    HttpCode,
    Req,
    HttpStatus,
    Res,
} from '@nestjs/common';
import { Routers } from '../../routers/routers';
import { TransportService } from './transport.services';
import { CoreController } from '../../core/core.controller';

/**
 * 中转服务CONTROLLER处理器
 *
 * @export
 * @class TransportController
 * @extends {CoreController}
 */
@Controller(Routers.TRANSPORT_MODULE_ROUTER)
export class TransportController extends CoreController {
    constructor(private readonly transportService: TransportService) {
        super();
    }

    /**
     * 中转服务接收
     *
     * @param {*} request
     * @returns
     * @memberof TransportController
     */
    @HttpCode(HttpStatus.OK)
    @All('getTransportData')
    public async getTransportData(@Req() request, @Res() res) {
        const result = await this.transportService.getTransportData(request);
        console.log('xxxxxxxxxxxx', result);

        res.status(HttpStatus.OK).json(result);
    }
}
