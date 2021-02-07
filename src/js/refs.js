const searchBySelector = querySelector => {
  let el;
  return (force = false) => {
    if (!el || force) {
      el = document.querySelector(querySelector);
    }
    return el;
  };
};

const refs = {
  headerBtnWrapper: searchBySelector('div.btn-wrapper'),
  body: document.querySelector('body'),
  upBtn: document.querySelector('.up-btn-wrapper'),
  gallery: document.querySelector('#gallery'),
  form: document.querySelector('.search-form'),
  input: document.querySelector('.search-field'),
  modalDiv: document.querySelector('.js-lightbox'),
  lightbox: document.querySelector('.lightbox'),
  overlayDiv: document.querySelector('.lightbox__overlay'),
  btnClose: document.querySelector('.lightbox__btn'),
  modalDivContent: document.querySelector('.lightbox__content'),
  libraryButton: document.querySelector('.library-ref'),
  container: document.getElementById('.container'),
  header: document.querySelector('#page-header'),
  galleryList: document.querySelector('.gallery'),
  watchedBtn: document.querySelector('#watched-film-btn'),
  homeBtn: document.querySelector('.home-ref'),

  pagination: document.querySelector('.pagination'),
  btnPage1: document.querySelector('.btn-page1'),
  btnPage2: document.querySelector('.btn-page2'),
  btnPage3: document.querySelector('.btn-page3'),
  btnPage4: document.querySelector('.btn-page4'),
  btnPage5: document.querySelector('.btn-page5'),
  previous: document.querySelector('.previous'),
  next: document.querySelector('.next'),
  dots1: document.querySelector('.js-dots1'),
  dots2: document.querySelector('.js-dots2'),
  btnMore: document.querySelector('.btn-load-more'),

  queueBtn: searchBySelector('#watched-queue-btn'),
  watchedBtn: searchBySelector('#watched-film-btn'),
  delMovieBtn: document.querySelectorAll('#delMovieBtn'),
  addToWatched: searchBySelector(".add-to-watched"),
  addToQueue: searchBySelector('.add-to-queue'),

  signIn: document.querySelector('#sign_in'),
  signOut: document.querySelector('#sign_out'),
  userInfo: document.querySelector('.user-info'),

  searchBtn: document.querySelector('.search-btn'),
};

export default refs;
