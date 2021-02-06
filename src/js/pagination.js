import refs from './refs';
import queryMovies from './queryMovies'


refs.pagination.addEventListener("click", onBtnClick);
let currentPage = 1;

refs.previous.hidden = true;
refs.dots1.hidden = true;

function onBtnClick(event) {

  if (event.target.tagName === 'BUTTON') {

    const activeBtn = event.target.dataset.index;
    currentPage = Number(activeBtn);

    refs.previous.hidden = true;
    refs.dots1.hidden = true;

    const btn1 = refs.btnPage1;
    const btn2 = refs.btnPage2;
    const btn3 = refs.btnPage3;
    const btn4 = refs.btnPage4;
    const btn5 = refs.btnPage5;
    const previous = refs.previous;
    const next = refs.next;

    if (event.target.classList.contains("next") && currentPage < 999) {
      btns.forEach((el) => el.classList.remove("active"))
      btn1.classList.add("active");
      next.dataset.index = Number(next.dataset.index) + 5;
      btn1.textContent = Number(btn1.textContent) + 5;
      btn2.textContent = Number(btn2.textContent) + 5;
      btn3.textContent = Number(btn3.textContent) + 5;
      btn4.textContent = Number(btn4.textContent) + 5;
      btn5.textContent = Number(btn5.textContent) + 5;
      btn1.dataset.index = Number(btn1.dataset.index) + 5;
      btn2.dataset.index = Number(btn2.dataset.index) + 5;
      btn3.dataset.index = Number(btn3.dataset.index) + 5;
      btn4.dataset.index = Number(btn4.dataset.index) + 5;
      btn5.dataset.index = Number(btn5.dataset.index) + 5;
      currentPage = next.dataset.index;
    }

    previous.dataset.index = currentPage;

    if (event.target.classList.contains("previous") && currentPage > 5) {
      next.dataset.index = Number(next.dataset.index) - 5;
      previous.dataset.index = next.dataset.index
      btn1.textContent = Number(btn1.textContent) - 5;
      btn2.textContent = Number(btn2.textContent) - 5;
      btn3.textContent = Number(btn3.textContent) - 5;
      btn4.textContent = Number(btn4.textContent) - 5;
      btn5.textContent = Number(btn5.textContent) - 5;
      btn1.dataset.index = Number(btn1.dataset.index) - 5;
      btn2.dataset.index = Number(btn2.dataset.index) - 5;
      btn3.dataset.index = Number(btn3.dataset.index) - 5;
      btn4.dataset.index = Number(btn4.dataset.index) - 5;
      btn5.dataset.index = Number(btn5.dataset.index) - 5;
      currentPage = previous.dataset.index;
    }
    console.log('currentPage>', currentPage);
    if (event.target.classList.contains("btn")) {
      setBtnActiveStyle(event)
    }

    queryMovies()
    }

  if (Number(currentPage) > 5) {
    refs.previous.hidden = false;
    refs.dots1.hidden = false;
  }
  if (Number(currentPage) > 995) {
    refs.next.hidden = true;
    refs.dots2.hidden = true;
  }
  
}

let btns = document.querySelectorAll('.btn');

function setBtnActiveStyle(event) {
  let btnEvent = event.target;
  btns.forEach((el) => el.classList.remove("active"));
  if (btnEvent.classList.contains("btn")) {
    btnEvent.classList.add("active")
  }
}

export { currentPage }