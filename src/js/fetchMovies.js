import refs from './refs';
import updateMarkup from './updateMarkup';
import movieCardsTpl from '../template/movieCards.hbs';

const apiKey = "api_key=50b81e1c6c3b9e5f74d2015b742ff0b0";
let currentPage = 1;


refs.pagination.addEventListener("click", onBtnClick);

function onBtnClick(event) {

  const activeBtn = event.target.dataset.index;
  currentPage = Number(activeBtn)
  
    const btn1 = refs.btnPage1;
    const btn2 = refs.btnPage2;
    const btn3 = refs.btnPage3;
    const btn4 = refs.btnPage4;
    const btn5 = refs.btnPage5;
    const previous = refs.previous;
    const next = refs.next;
    
  if (event.target.classList.contains("next") && currentPage < 999) {
    next.dataset.index = Number(next.dataset.index)+5;
    btn1.textContent = Number(btn1.textContent)+5;
    btn2.textContent = Number(btn2.textContent)+5;
    btn3.textContent = Number(btn3.textContent)+5;
    btn4.textContent = Number(btn4.textContent)+5;
    btn5.textContent = Number(btn5.textContent)+5;
    btn1.dataset.index = Number(btn1.dataset.index)+5;
    btn2.dataset.index = Number(btn2.dataset.index)+5;
    btn3.dataset.index = Number(btn3.dataset.index)+5;
    btn4.dataset.index = Number(btn4.dataset.index)+5;
    btn5.dataset.index = Number(btn5.dataset.index) + 5;
    currentPage = next.dataset.index;
  }

    previous.dataset.index = currentPage;
  
  if (event.target.classList.contains("previous") && currentPage > 1) {
    next.dataset.index = Number(next.dataset.index) - 5;
    previous.dataset.index = next.dataset.index
    btn1.textContent = Number(btn1.textContent)-5;
    btn2.textContent = Number(btn2.textContent)-5;
    btn3.textContent = Number(btn3.textContent)-5;
    btn4.textContent = Number(btn4.textContent)-5;
    btn5.textContent = Number(btn5.textContent)-5;
    btn1.dataset.index = Number(btn1.dataset.index)-5;
    btn2.dataset.index = Number(btn2.dataset.index)-5;
    btn3.dataset.index = Number(btn3.dataset.index)-5;
    btn4.dataset.index = Number(btn4.dataset.index)-5;
    btn5.dataset.index = Number(btn5.dataset.index) - 5;
    currentPage = previous.dataset.index;
  }
  console.log('currentPage>', currentPage);
  // console.log('previous>', previous.dataset.index);

  setBtnActiveStyle(event)
  refs.gallery.innerHTML = '';
  fetchMovies();
}  

function setBtnActiveStyle(event){
  let btnEvent = event.target;
  // console.log(btnEvent);
  let btns = document.querySelectorAll('.btn');
  btns.forEach((el) => el.classList.remove("active"));
  if(btnEvent.classList.contains("btn")){
  btnEvent.classList.add("active")
  }
}


function fetchMovies() {

  const url = `https://api.themoviedb.org/3/trending/movie/week?${apiKey}&page=${currentPage}`; // популярные фильмы за неделю

  


  return fetch(url)
  .then(response => response.json())
  .then(({ results }) => {
    fetchGenres().then(({ genres }) => {
      updateMovieMarkup(results, genres);
      // .then(data => updateMarkup(data)
    });
  });
}

function fetchGenres() {
return fetch(
  `https://api.themoviedb.org/3/genre/movie/list?${apiKey}`,
).then(response => response.json());
}



function updateMovieMarkup(films, genres) {
films.map(({ id, poster_path, title, release_date, genre_ids }) => {
  const filterGenres = genres.filter(genre => genre_ids.includes(genre.id));
  const mapGenres = filterGenres.map(({ name }) => name);
  if (mapGenres.length > 3) {
    mapGenres.splice(3, 0, 'Other');
  }
  const movieGenres = mapGenres.slice(0, 4).join(', ');
  const releaseDate = release_date.split('-')[0];



  const movie = [{ id, poster_path, title, movieGenres, releaseDate }];
  updateMarkup(movie);
});
}
// fetchMovies();

export default fetchMovies;

