import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import * as request from 'supertest';
import { CatsModule } from '../../src/cats/cats.module';
import { CatsService } from '../../src/cats/cats.service';

describe('Cats', () => {
	const catsService: any = { findAll: (): any => ['test'] };

	let app: INestApplication;

	beforeAll(async () => {
		const module: any = await Test.createTestingModule({
			imports: [CatsModule]
		})
			.overrideProvider(CatsService)
			.useValue(catsService)
			.compile();

		app = module.createNestApplication();
		await app.init();
	});

	it('/GET cats', () => {
		const exceptNum: number = 200;

		return request(app.getHttpServer())
			.get('/cats')
			.expect(exceptNum)
			.expect({
				data: catsService.findAll()
			});
	});

	afterAll(async () => {
		await app.close();
	});
});
