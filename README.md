![logo](docs/1567861669077.jpg)

## Nuxt.js and Nest.js isomorphism project

<p>Nuxt and Nest integrated, ships with Vant.</p>


## 1.Development
```js
npm run client:prod				// local start on production mode
npm run client:dev				// local start on development mode

visit: http://localhost:8088
```

## 2.Deploy
```js
npm run build

and

cross-env NODE_ENV=production npm run start		// server start on production mode
cross-env NODE_ENV=development npm run start	// server start on development mode
```

## 3.Directory Structure
```js
client --- The client side source code folder, write Vue.js logical
here
 |-------- assets
 |-------- components
 |-------- layouts
 |-------- middleware
 |-------- pages
 |-------- plugins
 |-------- static
 |-------- store

server --- The server side(Node.js) logical here
 |-------- main.ts
 |-------- app.module.ts
 |-------- app.controller.ts
 |-------- common
             |--------- decorators
             |--------- filters
             |--------- guards
             |--------- interceptors
             |--------- middleware
             |--------- nuxt
             |--------- pipes
 |-------- routers
 |-------- modules
             |--------- modeule A..
             |--------- modeule B..
             |--------- modeule C..
             |--------- modeule D..
```

## 4.Frameworks
> [Vant - Mobile UI Components built on Vue](https://youzan.github.io/vant/#/zh-CN/intro)

> [Nest.js - A progressive Node.js framework for building efficient, reliable and scalable server-side applications.](https://nestjs.com/)

> [Nuxt.js - The Vue.js Framework](https://nuxtjs.org/)

## 5.Plugins
> [Nuxt-property-decorator](https://github.com/nuxt-community/nuxt-property-decorator)

> [Vue class component](https://github.com/vuejs/vue-class-component)

> [Vuex class](https://github.com/ktsn/vuex-class/)

> [Nuxt class component](https://github.com/nuxt-community/nuxt-class-component)
