import { NuxtAxiosInstance } from '@nuxtjs/axios';

/** axios defined */
export let axios: NuxtAxiosInstance = null;

/** axios instance */
export default ({ app }): any => {
	axios = app.$axios;
};
