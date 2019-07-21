import { Test } from '@nestjs/testing';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';
import { ICat } from './interfaces/cat.interface';

describe('CatsController', () => {
	let catsController: any;
	let catsService: any;

	beforeEach(async () => {
		const module: any = await Test.createTestingModule({
			controllers: [CatsController],
			providers: [CatsService]
		}).compile();

		catsService = module.get<CatsService>(CatsService);
		catsController = module.get<CatsController>(CatsController);
	});

	describe('findAll', () => {
		it('should return an array of cats', async () => {
			const result: ICat[] = [
				{
					age: 2,
					breed: 'Bombay',
					name: 'Pixel'
				}
			];
			jest.spyOn(catsService, 'findAll').mockImplementation(() => result);

			expect(await catsController.findAll()).toBe(result);
		});
	});
});
