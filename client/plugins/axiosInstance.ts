import { NuxtAxiosInstance } from '@nuxtjs/axios';

export let axios: NuxtAxiosInstance = null;

export default ({ app }) => {
  axios = app.$axios;
};
