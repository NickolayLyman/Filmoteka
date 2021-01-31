import itemsTemplate from '../template/myLibraryHeaderTamplate.hbs';
import fnReloadPage from './fnReloadPage.js';

const headerRef = document.querySelector('#page-header');
const libraryRef = document.querySelector('.library-ref');
const inputRef = document.querySelector('.search-form');
const pageRef = document.querySelector('.ref-wrapper');
const removeListenerBtnRef = document.querySelector('.remove');

let markup = '';
markup = itemsTemplate();

const createMarkup = () => {
  inputRef.remove();
  pageRef.insertAdjacentHTML('afterend', markup);
  headerRef.classList.replace('page-header', 'page-header-library');
};

libraryRef.addEventListener('click', createMarkup);

removeListenerBtnRef.addEventListener('click', () => {
  removeListenerBtnRef.removeEventListener('click', createMarkup);
});

function reloadPage() {
  if (location.hash === '#library') {
    createMarkup();
    removeListenerBtnRef.removeEventListener('click', createMarkup);
    fnReloadPage();
  }
}

export default reloadPage;
