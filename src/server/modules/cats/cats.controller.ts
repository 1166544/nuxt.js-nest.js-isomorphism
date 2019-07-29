import {
	Body,
	Controller,
	Get,
	Param,
	Post,
	UseGuards,
	UseInterceptors
} from '@nestjs/common';
import { Roles } from '../../common/decorators/roles.decorator';
import { RolesGuard } from '../../common/guards/roles.guard';
import { LoggingInterceptor } from '../../common/interceptors/logging.interceptor';
import { TransformInterceptor } from '../../common/interceptors/transform.interceptor';
import { ParseIntPipe } from '../../common/pipes/parse-int.pipe';
import { Routers } from './../../routers/routers';
import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/create-cat.dto';
import { ICat } from './interfaces/cat.interface';

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
