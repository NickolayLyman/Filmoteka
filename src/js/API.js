export default {
    searchQuery: '',
    currentPage: 1,
    fetchSearchedMovie() {
        
        const apiKey = "api_key=50b81e1c6c3b9e5f74d2015b742ff0b0";
        const url = `https://api.themoviedb.org/3/search/movie?${apiKey}&language=en-US&page=${this.currentPage}&include_adult=false&query=${this.searchQuery}`;
        return fetch(url).then(res => res.json()).then(({ results }) => {
            this.incrementPage();
            return results;
        });
            
        
    },
    resetCurrentPage() {
        this.currentPage = 1;
    },
    incrementPage() {
        this.currentPage += 1;
    },
    get query() {
        return this.searchQuery;
    },
    set query(value) {
        return this.searchQuery = value;
    },

};