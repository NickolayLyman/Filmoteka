import refs from './refs.js'

function addEmptyStylePage() {
    console.log(refs.galleryList.hasChildNodes())
    if (!refs.galleryList.hasChildNodes()) {
        refs.gallery.innerHTML = '';
        refs.galleryList.classList.add('empty-page-style');
        refs.galleryList.classList.remove('gallery');
        refs.gallery.innerHTML =
            '<li><h2>EMPTY<h2><p>Nothing has been added yet :(</p><img class="image" data-empty-page="empty-page" src="https://i0.wp.com/www.ecommerce-nation.com/wp-content/uploads/2017/08/How-to-Give-Your-E-Commerce-No-Results-Page-the-Power-to-Sell.png?fit=1000%2C600&ssl=1" alt="empty page pic"></li>';
    }
}

export default addEmptyStylePage;