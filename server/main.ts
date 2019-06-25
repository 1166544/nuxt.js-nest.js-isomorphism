import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './application.module';
import { NuxtFilter } from './nuxt/nuxt.filter';
import NuxtServer from './nuxt/';
import config from '../nuxt.config';
import Consola from 'consola';

declare const module: any;

async function bootstrap() {
  const { host, port } = config.env;

  const nuxt = await NuxtServer.getInstance().run(
    config.dev ? !module.hot._main : true,
  );
  const server = await NestFactory.create(ApplicationModule);

  server.useGlobalFilters(new NuxtFilter(nuxt));

  await server.listen(port, host, () => {
    Consola.ready({
      message: `Server listening on http://${host}:${port}`,
      badge: true,
    });
  });

  if (config.dev && module.hot) {
    module.hot.accept();
    module.hot.dispose(() => server.close());
  }
}

bootstrap();
