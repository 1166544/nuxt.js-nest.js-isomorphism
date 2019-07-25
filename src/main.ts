import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './app.module';

/** entry */
async function bootstrap(): Promise<any> {
	const app: any = await NestFactory.create(ApplicationModule);
	const port: number = 8088;
	app.useGlobalPipes(new ValidationPipe());
	await app.listen(port);
	console.log('Server started at::: ', port);
}
bootstrap();
