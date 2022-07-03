export default {
    count (state) {
        return state.news.length;
    },
    all (state) {
        return state.news;
    },
    newsСategory(state) {
        return state.news.filter(post => post.category === 'Анонс');
    },  
    newsById (state) {
        return (id) => state.news.find(item => item.id === id);
    }
}