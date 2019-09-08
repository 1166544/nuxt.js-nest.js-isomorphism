import { BaseHttpClient } from '../../common/middleware/http.middleware';
import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ICat } from './interfaces/cat.interface';
import { CreateCatDto } from './dto/create-cat.dto';

/**
 * 本地服务
 *
 * @export
 * @class LocalService
 */
@Injectable()
export class LocalService extends BaseHttpClient {
	constructor(@InjectModel('Cat') private readonly catModel: Model<ICat>) {
		super();
	}

	/**
	 * create
	 * @description Creates local service
	 * @param createCatDto
	 * @returns create
	 */
	public async create(createCatDto: CreateCatDto): Promise<ICat> {
		const createdCat: any = new this.catModel(createCatDto);
		console.log(createdCat);

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
	public async getGoods(): Promise<any> {
		return await this.get('/goods.json').toPromise();
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
