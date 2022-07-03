export default {
    addNews(state, data) {
        state.news.push(data);
    },
    clear(state) {
        state.news = [];
    }
}