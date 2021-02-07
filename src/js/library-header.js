import itemsTemplate from '../template/myLibraryHeaderTamplate.hbs';
import fnReloadPage from './fnReloadPage.js';
import refs from './refs.js'

const headerRef = document.querySelector('#page-header');
const libraryRef = document.querySelector('.library-ref');
const inputRef = document.querySelector('.search-form');
const pageRef = document.querySelector('.ref-wrapper');
const removeListenerBtnRef = document.querySelector('.remove');
import firebase from 'firebase/app';


let markup = '';
markup = itemsTemplate();

const createMarkup = () => {
  inputRef.remove();
  let btnWrapper = refs.headerBtnWrapper(true);
  if (btnWrapper) {
    btnWrapper.innerHTML = '';
  }
  pageRef.insertAdjacentHTML('afterend', markup);
  headerRef.classList.replace('page-header', 'page-header-library');
};

libraryRef.addEventListener('click', () => {
  if (firebase.auth().currentUser) {
    createMarkup()
  }
})

// libraryRef.addEventListener('click', createMarkup);
/*
removeListenerBtnRef.addEventListener('click', () => {
  removeListenerBtnRef.removeEventListener('click', createMarkup);
});
*/
function reloadPage() {
  if (location.hash) {
    createMarkup();
    //removeListenerBtnRef.removeEventListener('click', createMarkup);
    fnReloadPage();
  }
}

export default reloadPage;
