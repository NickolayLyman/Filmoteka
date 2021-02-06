import * as templ from './modalCards';
import * as library from './myLibrary.js';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
import renderingContent from './renderingContent.js';
import markUpSearchMovie from './markupSearchedMovies'
import * as add from './fnAddDataToFireBase.js'
import * as auth from './Auth.js'



markUpSearchMovie();
library.createLibraryPage();
add.addDataToFireBaseStorage();
//setToLocalStorage();
//addDataToLocalStorage();

auth.initApp(renderingContent);