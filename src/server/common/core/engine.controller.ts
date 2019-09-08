import { HttpStatus } from '@nestjs/common';

/**
 * CONTROLLER基类
 */
export class EngineController {
	/**
	 * 格式化列表返回数据结构
	 * @param total 总条数
	 * @param pageSize 每页数
	 * @param pageNo 当前页
	 * @param pages 总页数
	 * @param list 集合数据
	 * @param {number} [code=HttpStatus.OK]
	 * @param {string} [message='操作成功']
	 * @param {boolean} [success=true]
	 */
	public encapsulationReturnList(
		total: number,
		pageSize: number,
		pageNo: number,
		pages: number,
		list: Array<any>,
		code: number = HttpStatus.OK,
		message: string = '操作成功',
		success: boolean = true
	): any {
		return {
			code,
			message,
			success,
			data: {
				total,
				pageSize,
				pageNo,
				pages,
				list
			}
		};
	}

	/**
	 * 格式化普通对像返回结构
	 *
	 * @param {*} data
	 * @param {number} [code=HttpStatus.OK]
	 * @param {string} [message='操作成功']
	 * @param {boolean} [success=true]
	 * @returns
	 * @memberof EngineController
	 */
	public encapsulationReturnObject(
		data: any,
		code: number = HttpStatus.OK,
		message: string = '操作成功',
		success: boolean = true
	): any {
		return {
			code,
			message,
			success,
			data
		};
	}
}
