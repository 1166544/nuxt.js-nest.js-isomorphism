import { Controller, Req, Get, Res, HttpStatus, Post, Body } from '@nestjs/common';
import { LocalService } from './local.service';
import { Routers } from '../../routers/routers';
import { CreateCatDto } from './dto/create-cat.dto';
import { ICat } from './interfaces/cat.interface';

/**
 * 中转服务CONTROLLER处理器
 *
 * @export
 * @class LocalController
 * @extends {}
 */
@Controller(Routers.LOCAL_MODULE_ROUTER)
export class LocalController {
	constructor(
		private readonly localService: LocalService
	) {
		// hole
	}

	/**
	 * create
	 * @description Posts local controller
	 * @param createCatDto
	 */
	@Post('create')
	public async create(@Body() createCatDto: CreateCatDto): Promise<any> {
		await this.localService.create(createCatDto);
	}

	/**
	 * find all
	 * @description Gets local controller
	 * @returns all
	 */
	@Get('findAll')
	public async findAll(): Promise<ICat[]> {
		return this.localService.findAll();
	}

	/**
	 * 获取新闻列表
	 *
	 * @param {*} request
	 * @returns
	 * @memberof TransportController
	 */
	@Get('getList')
	public async getList(@Res() res: any, @Req() request: any): Promise<any> {
		const returnData: any = await this.localService.getList();

		res.status(HttpStatus.OK).json(returnData.data);
	}

	/**
	 * 获取购物车信息
	 * @param request
	 * @returns carts
	 */
	@Get('getCarts')
	public async getCarts(@Res() res: any, @Req() request: any): Promise<any> {
		const returnData: any = await this.localService.getCarts();

		res.status(HttpStatus.OK).json(returnData.data);
	}

	/**
	 * 获取商品信息
	 * @param request
	 * @returns goods
	 */
	@Get('getGoods')
	public async getGoods(@Res() res: any, @Req() request: any): Promise<any> {
		const returnData: any = await this.localService.getGoods();

		res.status(HttpStatus.OK).json(returnData.data);
	}
}
