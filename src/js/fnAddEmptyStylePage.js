import refs from './refs.js'
import emptyPage from '../img/empty-page-optimaze.png'

function addEmptyStylePage() {
    console.log(refs.galleryList.hasChildNodes())
    if (!refs.galleryList.hasChildNodes()) {
        refs.gallery.innerHTML = '';
        refs.galleryList.classList.add('empty-page-style');
        refs.galleryList.classList.remove('gallery');
        refs.gallery.innerHTML =
            `<li><h2>EMPTY<h2><p>Nothing has been added yet :(</p><img class="image" data-empty-page="empty-page" src=${emptyPage} alt="empty page pic"></li>`;
    }
}

export default addEmptyStylePage;