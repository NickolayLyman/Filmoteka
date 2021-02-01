import fetchMovies from './fetchMovies';
import updateMarkup from './updateMarkup';
import reloadPage from './library-header.js';

function renderingContent() {
  if (!location.hash) {
    fetchMovies();
  }
  reloadPage();
}
export default renderingContent;
