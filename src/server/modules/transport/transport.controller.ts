import {
	Controller,
	Get,
	Res,
	HttpStatus
} from '@nestjs/common';
import { Routers } from '../../routers/routers';
import { TransportService } from './transport.service';

/**
 * Transport controller
 *
 * @export
 * @class TransportController
 */
@Controller(Routers.TRANSPORT_MODULE_ROUTER)
export class TransportController {
	constructor(private readonly catsService: TransportService) {
		this.catsService.findAll();
	}

	/**
	 * Transport
	 *
	 * @param {*} id
	 * @memberof TransportController
	 */
	@Get('transportData')
	public async transportData(
		@Res() res: any
	): Promise<any> {
		const data: any = [
			{
				'id': '5d5cbb25421846662d983a25',
				'author_id': '5d5104cc697873456c6bca69',
				'tab': 'share',
				'content': 'FmgpGBgp5Uiis4mzjJO6Ml80BYBM',
				'title': '众测图数据库 Nebula Graph | 捉虫计划已开启，这项有礼',
				'last_reply_at': '2019-08-23T14:56:12.364Z',
				'good': false,
				'top': true,
				'reply_count': 3,
				'visit_count': 1531,
				'create_at': '2019-08-21T03:31:49.789Z',
				'author': {
					'loginname': 'QingZ11',
					'avatar_url': 'https://avatars0.githubusercontent.com/u/38887077?v=4&s=120'
				}
			}
		];

		res.status(HttpStatus.OK).json(data);
	}
}
