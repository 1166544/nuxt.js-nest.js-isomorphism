import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NuxtFilter } from './modules/nuxt/nuxt.filter';
import NuxtServer from './modules/nuxt/';
import config from '../nuxt.config';
import Consola from 'consola';
import { ConfigDefault } from '../config/config.default';

declare const module: any;

async function bootstrap() {
    const { host, port } = config.env;
    const apiPerfix: string = new ConfigDefault().getApiPerfix();
    const nuxt: NuxtServer = await NuxtServer.getInstance().run(
        config.dev ? !module.hot._main : true,
    );
    const server = await NestFactory.create(AppModule);

    server.useGlobalFilters(new NuxtFilter(nuxt));
    server.setGlobalPrefix(apiPerfix);
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
