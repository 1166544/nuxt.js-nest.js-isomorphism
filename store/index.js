export const state = () => ({
    visitors: []
});

export const mutations = {
    ADD_VISITOR_HISTORY(state, path) {
        state.visitors.push({
            path,
            date: new Date().toJSON()
        })
    }
}
