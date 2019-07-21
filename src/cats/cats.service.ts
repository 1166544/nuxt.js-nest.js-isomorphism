import { Injectable } from '@nestjs/common';
import { ICat } from './interfaces/cat.interface';

/**
 * Cats service
 *
 * @export
 * @class CatsService
 */
@Injectable()
export class CatsService {
	private readonly cats: ICat[] = [];

	/**
	 * create
	 *
	 * @param {ICat} cat
	 * @returns {*}
	 * @memberof CatsService
	 */
	public create(cat: ICat): any {
		this.cats.push(cat);
	}

	/**
	 * Find all
	 *
	 * @returns {ICat[]}
	 * @memberof CatsService
	 */
	public findAll(): ICat[] {
		return this.cats;
	}
}
