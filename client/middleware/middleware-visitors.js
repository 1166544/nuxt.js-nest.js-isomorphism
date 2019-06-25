export default function ({ store, route, redirect }) {

    // 将用户访问页面记录存入store
    store.commit('ADD_VISITOR_HISTORY', route.path);

}
