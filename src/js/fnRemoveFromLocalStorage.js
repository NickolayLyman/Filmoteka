import refs from './refs.js'
import getMoviesFromLocalStorage from "./fnGetDataFromLocStorage.js"

function removeFromLocalStoryge(key, id) {
    const values = localStorage.getItem(key);

    if (values.includes(id)) {
        let arrValues = values.split(',');
        const inxId = arrValues.indexOf(id);
        let newArrValues = arrValues.splice(inxId, 1);
        newArrValues = arrValues.join();
        localStorage.setItem(key, newArrValues);
        refs.gallery.innerHTML = '';
        getMoviesFromLocalStorage(key);
    }
}

export default removeFromLocalStoryge;