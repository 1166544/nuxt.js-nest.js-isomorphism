import { Injectable } from '@nestjs/common';
import { ITransport } from './interfaces/transport.interface';

/**
 * Transport service
 *
 * @export
 * @class TransportService
 */
@Injectable()
export class TransportService {
	private readonly cats: ITransport[] = [];

	/**
	 * create
	 *
	 * @param {ITransport} cat
	 * @returns {*}
	 * @memberof TransportService
	 */
	public create(cat: ITransport): any {
		this.cats.push(cat);
	}

	/**
	 * Find all
	 *
	 * @returns {ITransport[]}
	 * @memberof TransportService
	 */
	public findAll(): ITransport[] {
		return this.cats;
	}
}
