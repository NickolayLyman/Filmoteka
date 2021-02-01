const searchBySelector = querySelector => {
  let el;
  return () => {
    if (!el) {
      el = document.querySelector(querySelector);
    }
    return el;
  };
};

const refs = {
  body: document.querySelector('body'),
  upBtn: document.querySelector('.up-btn-wrapper'),
  gallery: document.querySelector('#gallery'),
  form: document.querySelector('.search-form'),
  modalDiv: document.querySelector('.js-lightbox'),
  lightbox: document.querySelector('.lightbox'),
  overlayDiv: document.querySelector('.lightbox__overlay'),
  modalDivContent: document.querySelector('.lightbox__content'),
  libraryButton: document.querySelector('.library-ref'),
  container: document.getElementById('.container'),
  header: document.querySelector('#page-header'),
  galleryList: document.querySelector('.gallery'),
  watchedBtn: document.querySelector('#watched-film-btn'),
  homeBtn: document.querySelector('.home-ref'),
  queueBtn: searchBySelector('#watched-queue-btn'),
  watchedBtn: searchBySelector('#watched-film-btn'),
};

export default refs;
