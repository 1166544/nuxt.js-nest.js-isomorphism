import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
// tslint:disable-next-line: no-implicit-dependencies
import Consola from 'consola';
import config from '../../nuxt.config';
import { ApplicationModule } from './app.module';
import NuxtServer from './common/nuxt';
import { NuxtFilter } from './common/nuxt/nuxt.filter';

// tslint:disable-next-line:completed-docs
declare const module: any;

/**
 * bootstrap
 *
 */
// tslint:disable-next-line:typedef
async function bootstrap() {
	const { host, port } = config.env;

	const nuxt: any = await NuxtServer.getInstance().run(
		config.dev ? !module.hot._main : true
	);
	const server: any = await NestFactory.create(ApplicationModule);

	server.useGlobalFilters(new NuxtFilter(nuxt));
	server.useGlobalPipes(new ValidationPipe());

	await server.listen(port, host, () => {
		Consola.ready({
			message: `Server listening on http://${host}:${port}`,
			badge: true
		});
	});

	if (config.dev && module.hot) {
		module.hot.accept();
		module.hot.dispose(() => server.close());
	}
}

bootstrap();
