import Vue from 'vue';

declare module '*.vue' {
  const _default: Vue;
  export default _default;
}
