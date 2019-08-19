<p align="center">
  <a href="https://nuxtjs.org/ target="blank"><img align="center" style="width:320px" alt="Nuxt Logo" src="https://nuxtjs.org/meta_400.png"/></a>
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

## Nuxt.js and Nest.js isomorphism project

<p>Nuxt and Nest integrated, ships with vuetify.</p>
<p>UI Frameworks base on <a href="https://vuetifyjs.com">Vuetify</a></p>


## 1.Development
```js
npm run client

or 

npm run serve

visit: http://localhost:8088
```

## 2.Deploy
```js
npm run build
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
