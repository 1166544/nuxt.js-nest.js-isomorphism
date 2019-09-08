import { BaseHttpClient } from '../../common/middleware/http.middleware';
import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { ICat } from './interfaces/cat.interface';
import { CreateCatDto } from './dto/create-cat.dto';
import { CreateGoodsDto } from './dto/create-goods.dto';
import { IGoods } from './interfaces/goods.interface';
import { MODEL } from './local.providers';

/**
 * 本地服务
 *
 * @export
 * @class LocalService
 */
@Injectable()
export class LocalService extends BaseHttpClient {
	constructor(
		@Inject(MODEL.CAT_MODEL) private readonly catModel: Model<ICat>,
		@Inject(MODEL.GOODS_MODEL) private readonly goodsModel: Model<IGoods>
	) {
		super();
	}

	/**
	 * create goods
	 * @description Creates local service
	 * @param createGoodsDto
	 * @returns create
	 */
	public async createGoods(createGoodsDto: CreateGoodsDto): Promise<IGoods> {
		const createdGoods: any = new this.goodsModel(createGoodsDto);

		return await createdGoods.save();
	}

	/**
	 * create cat
	 * @description Creates local service
	 * @param createCatDto
	 * @returns create
	 */
	public async create(createCatDto: CreateCatDto): Promise<ICat> {
		const createdCat: any = new this.catModel(createCatDto);

		return await createdCat.save();
	}

	/**
	 * finds all
	 * @description Finds all
	 * @returns all
	 */
	public async findAll(): Promise<ICat[]> {
		return await this.catModel.find().exec();
	}

	/**
	 * 获取已选择商品列表数据
	 *
	 * @returns {Promise<any>}
	 * @memberof LocalService
	 */
	public async getCarts(): Promise<any> {
		const returnData: any = await this.get('/carts.json').toPromise();

		return returnData;
	}

	/**
	 * 获取商品页面单个商品数据
	 *
	 * @returns {Promise<any>}
	 * @memberof LocalService
	 */
	public async getGoods(id: string): Promise<any> {
		const result: any = await this.goodsModel.findById(id).exec();

		return result;
	}

	/**
	 * 获取商品列表数据
	 *
	 * @returns {Promise<any>}
	 * @memberof LocalService
	 */
	public async getList(): Promise<any> {
		return await this.get('/list.json').toPromise();
	}
}
