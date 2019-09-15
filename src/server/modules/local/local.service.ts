import { BaseHttpClient } from '../../common/middleware/http.middleware';
import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { ICat } from './interfaces/cat.interface';
import { CreateCatDto } from './dto/create-cat.dto';
import { CreateGoodsDto } from './dto/create-goods.dto';
import { IGoods } from './interfaces/goods.interface';
import { MODEL } from './local.providers';
import { AddCartsDto } from './dto/add-carts.dto';
import { ICart } from './interfaces/cart.interface';
import { CardListItemDto } from './dto/card-list-item.dto';
import { LoginDto } from './dto/login.dto';
import uuidV1 from 'uuid/v1';
import uuidV3 from 'uuid/v3';
import { IUser } from './interfaces/user.interface';

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
		@Inject(MODEL.GOODS_MODEL) private readonly goodsModel: Model<IGoods>,
		@Inject(MODEL.CARTS_MODEL) private readonly cartsModel: Model<ICart>,
		@Inject(MODEL.USER_MODEL) private readonly userModel: Model<IUser>
	) {
		super();
	}

	/**
	 * 添加入购物车
	 * @description Creates local service
	 * @param addToCartsDto
	 * @returns create
	 */
	public async addToCart(addToCartsDto: AddCartsDto): Promise<IGoods> {
		const findResult: Array<any> = await this.cartsModel.find({ id: addToCartsDto.id }).exec();
		let processResult: any;
		if (findResult && findResult.length === 0) {
			// 插入新的
			const addToCarts: any = new this.cartsModel(addToCartsDto);
			processResult = await addToCarts.save();
		} else {

			// 更新数量
			// 0.增加 1.减少 2.原值存入
			let numValue: number;
			switch (addToCartsDto.forceType) {
				case AddCartsDto.INC_NUM:
					// 增加
					numValue = Number(findResult[0].num) + 1;
					break;
				case AddCartsDto.DEC_NUM:
					// 减少
					numValue = Number(findResult[0].num) - 1;
					break;
				case AddCartsDto.FORCE_NUM:
					// 原值存入
					numValue = addToCartsDto.num;
					break;
				default:
					// 增加
					numValue = Number(findResult[0].num) + 1;
					break;
			}
			// 执行更新
			processResult = this.cartsModel.updateOne({ id: addToCartsDto.id }, { num: numValue });
		}

		return processResult;
	}

	/**
	 * login
	 * @description Creates local service
	 * @param loginDto
	 * @returns create
	 */
	public async login(loginDto: LoginDto): Promise<Array<any>> {
		const returnValue: Array<IUser> = await this.userModel.find({ userName: loginDto.userName }).exec();
		const userList: Array<any> = [];

		if (returnValue.length > 0) {
			while (returnValue.length) {
				const item: IUser = returnValue.shift();
				let accessToken: string = uuidV3(item.userName, uuidV1());

				accessToken = accessToken.replace(/-/ig, '');
				userList.push({
					userName: item.userName,
					_id: item._id,
					accessToken
				});

				// TODO: 存储token到redis或全局对象用于校验
			}
		}

		return userList;
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
		const returnData: any = await this.cartsModel.find().exec();

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
	 * 依据ID获取已添加入购物车的列表数据项
	 *
	 * @returns {Promise<any>}
	 * @memberof LocalService
	 */
	public async getCartsListData(cartListItem: CardListItemDto): Promise<any> {
		const ids: Array<string> = [];
		while (cartListItem.list.length) {
			const cartItem: AddCartsDto = cartListItem.list.shift();
			ids.push(cartItem.id);
		}

		const result: IGoods[] = await this.goodsModel.find().where('_id').in(ids).exec();

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
