import {
	Body,
	Controller,
	Get,
	Param,
	Post,
	UseGuards,
	UseInterceptors
} from '@nestjs/common';
import { Roles } from '../../common/decorators/CommonRolesDecorator';
import { RolesGuard } from '../../common/guards/CommonRolesGuard';
import { LoggingInterceptor } from '../../common/interceptors/CommonLoggingInterceptor';
import { TransformInterceptor } from '../../common/interceptors/CommonTransformInterceptor';
import { ParseIntPipe } from '../../common/pipes/CommonParseIntPipe';
import { Routers } from '../../routers/RoutersServer';
import { CatsService } from './CatsService';
import { CreateCatDto } from './dto/CatsCreateDto';
import { ICat } from './interfaces/ICats';

/**
 * Cats controller
 *
 * @export
 * @class CatsController
 */
@Controller(Routers.CATS_MODULE_ROUTER)
@UseGuards(RolesGuard)
@UseInterceptors(LoggingInterceptor, TransformInterceptor)
export class CatsController {
	constructor(private readonly catsService: CatsService) { }

	/**
	 * create
	 *
	 * @param {CreateCatDto} createCatDto
	 * @memberof CatsController
	 */
	@Post()
	@Roles('admin')
	public async create(@Body() createCatDto: CreateCatDto): Promise<any> {
		this.catsService.create(createCatDto);
	}

	/**
	 * Find all
	 *
	 * @returns {Promise<ICat[]>}
	 * @memberof CatsController
	 */
	@Get()
	public async findAll(): Promise<ICat[]> {
		return this.catsService.findAll();
	}

	/**
	 * Find one
	 *
	 * @param {*} id
	 * @memberof CatsController
	 */
	@Get(':id')
	public findOne(
		@Param('id', new ParseIntPipe())
		id: any
	): any {
		// logic
	}
}
