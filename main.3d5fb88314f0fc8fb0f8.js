(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"2mXJ":function(e,t,n){var a=n("mp5j");e.exports=(a.default||a).template({1:function(e,t,n,a,r){var i,o=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return"                    "+e.escapeExpression("function"==typeof(i=null!=(i=o(n,"name")||(null!=t?o(t,"name"):t))?i:e.hooks.helperMissing)?i.call(null!=t?t:e.nullContext||{},{name:"name",hash:{},data:r,loc:{start:{line:29,column:20},end:{line:29,column:28}}}):i)+"&nbsp;&nbsp;\r\n"},compiler:[8,">= 4.3.0"],main:function(e,t,n,a,r){var i,o=e.lambda,l=e.escapeExpression,s=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return'\x3c!-- Шаблон модалки одного фильма --\x3e\r\n\r\n<div class="movie-container">\r\n    <div class="movie-image">\r\n        <img src="https://image.tmdb.org/t/p/w500'+l(o(null!=t?s(t,"poster_path"):t,t))+'" alt="'+l(o(null!=t?s(t,"title"):t,t))+'">\r\n    </div>\r\n    <div class="movie-description">\r\n        <h1 class="movie-description-title">'+l(o(null!=t?s(t,"title"):t,t))+'</h1>\r\n        <div class="movie-description-block">\r\n            <ul class="movie-description-list-left">\r\n                <li class="movie-description-list-left-item">Vote / Votes</li>\r\n                <li class="movie-description-list-left-item">Popularity</li>\r\n                <li class="movie-description-list-left-item">Original title</li>\r\n                <li class="movie-description-list-left-item">Genre</li>\r\n            </ul>\r\n            <ul class="movie-description-list-right">\r\n                <li class="movie-description-list-right-item">\r\n                    <span class="movie-rating filler">'+l(o(null!=t?s(t,"vote_average"):t,t))+'</span> /\r\n                    <span class="movie-vote-count filler">'+l(o(null!=t?s(t,"vote_count"):t,t))+'</span>\r\n                </li>\r\n                <li class="movie-description-list-right-item">\r\n                    '+l(o(null!=t?s(t,"popularity"):t,t))+'\r\n                </li>\r\n                <li class="movie-description-list-right-item">\r\n                    <span class="original-title">'+l(o(null!=t?s(t,"original_title"):t,t))+'</span>\r\n                </li>\r\n                <li class="movie-description-list-right-item">\r\n'+(null!=(i=s(n,"each").call(null!=t?t:e.nullContext||{},null!=t?s(t,"genres"):t,{name:"each",hash:{},fn:e.program(1,r,0),inverse:e.noop,data:r,loc:{start:{line:28,column:20},end:{line:30,column:29}}}))?i:"")+'                </li>\r\n            </ul>\r\n        </div>\r\n        <div class="movie-about">\r\n            <p class="movie-about-title">ABOUT</p>\r\n            <p class="movie-about-text">'+l(o(null!=t?s(t,"overview"):t,t))+'</p>\r\n        </div>\r\n        <button class="add-to-watched" type="button" data-action-watched="watched" data-movie-id="'+l(o(null!=t?s(t,"id"):t,t))+'">ADD TO\r\n            WATCHED</button>\r\n        <button class="add-to-queue" type="button" data-action-queue="queue" data-movie-id="'+l(o(null!=t?s(t,"id"):t,t))+'">ADD TO\r\n            QUEUE</button>\r\n    </div>\r\n</div>'},useData:!0})},"Dv/5":function(e,t,n){},GwTD:function(e,t,n){var a=n("mp5j");e.exports=(a.default||a).template({compiler:[8,">= 4.3.0"],main:function(e,t,n,a,r){return'<div class="btn-wrapper">\r\n  <button id="watched-film-btn" data-watched-film-btn="watch-btn" class="btn btn-active-style" disabled>Watched</button>\r\n  <button id="watched-queue-btn" data-queue-film-btn="queue-btn" class="btn btn-nonactive-style">queue</button>\r\n</div>'},useData:!0})},QfWi:function(e,t,n){"use strict";n.r(t);n("w1z4"),n("Dv/5"),n("lYjL"),n("RtS0"),n("IvQZ"),n("8cZI"),n("lmye"),n("WB5j"),n("Xlt+"),n("D/wG"),n("fp7Y"),n("JBxO"),n("FdtR"),n("QDHd"),n("Muwe"),n("4NM0"),n("aZFp"),n("3dw1");var a,r=function(e){var t;return function(){return t||(t=document.querySelector(e)),t}},i=((a={body:document.querySelector("body"),upBtn:document.querySelector(".up-btn-wrapper"),gallery:document.querySelector("#gallery"),form:document.querySelector(".search-form"),modalDiv:document.querySelector(".js-lightbox"),lightbox:document.querySelector(".lightbox"),overlayDiv:document.querySelector(".lightbox__overlay"),modalDivContent:document.querySelector(".lightbox__content"),libraryButton:document.querySelector(".library-ref"),container:document.getElementById(".container"),header:document.querySelector("#page-header"),galleryList:document.querySelector(".gallery"),watchedBtn:document.querySelector("#watched-film-btn"),homeBtn:document.querySelector(".home-ref"),pagination:document.querySelector(".pagination"),btnPage1:document.querySelector(".btn-page1"),btnPage2:document.querySelector(".btn-page2"),btnPage3:document.querySelector(".btn-page3"),btnPage4:document.querySelector(".btn-page4"),btnPage5:document.querySelector(".btn-page5"),previous:document.querySelector(".previous"),next:document.querySelector(".next"),queueBtn:r("#watched-queue-btn")}).watchedBtn=r("#watched-film-btn"),a),o=n("v+qO"),l=n.n(o);var s=function(e){var t="";"404"!==e.status&&(t=l()(e)),i.gallery.insertAdjacentHTML("beforeend",t)},c=n("ZEAl"),u={lines:15,length:0,width:10,radius:31,scale:1.25,corners:1,speed:1.4,rotate:0,animation:"spinner-line-fade-default",direction:1,color:"#FF6B08",fadeColor:"transparent",top:"46%",left:"50%",shadow:"0 0 1px transparent",zIndex:2e9,className:"spinner",position:"absolute"},d="api_key=50b81e1c6c3b9e5f74d2015b742ff0b0",m=1;function p(){var e=event.target;document.querySelectorAll(".btn").forEach((function(e){return e.classList.remove("active")})),e.classList.contains("btn")&&e.classList.add("active")}function v(){var e="https://api.themoviedb.org/3/trending/movie/week?"+d+"&page="+m,t=document.getElementById("gallery"),n=new c.a(u).spin(t);return fetch(e).then((function(e){return e.json()})).then((function(e){var t=e.results;h().then((function(e){var n=e.genres;f(t,n)})).finally((function(){n.stop()}))}))}function h(){return fetch("https://api.themoviedb.org/3/genre/movie/list?"+d).then((function(e){return e.json()}))}function f(e,t){e.map((function(e){var n=e.id,a=e.poster_path,r=e.title,i=e.release_date,o=e.genre_ids,l=t.filter((function(e){return o.includes(e.id)})).map((function(e){return e.name}));l.length>3&&l.splice(3,0,"Other");var c=l.slice(0,4).join(", "),u=i.split("-")[0];s([{id:n,poster_path:a,title:r,movieGenres:c,releaseDate:u}])}))}i.pagination.addEventListener("click",(function(e){var t=e.target.dataset.index;m=Number(t);var n=i.btnPage1,a=i.btnPage2,r=i.btnPage3,o=i.btnPage4,l=i.btnPage5,s=i.previous,c=i.next;e.target.classList.contains("next")&&m<999&&(c.dataset.index=Number(c.dataset.index)+5,n.textContent=Number(n.textContent)+5,a.textContent=Number(a.textContent)+5,r.textContent=Number(r.textContent)+5,o.textContent=Number(o.textContent)+5,l.textContent=Number(l.textContent)+5,n.dataset.index=Number(n.dataset.index)+5,a.dataset.index=Number(a.dataset.index)+5,r.dataset.index=Number(r.dataset.index)+5,o.dataset.index=Number(o.dataset.index)+5,l.dataset.index=Number(l.dataset.index)+5,m=c.dataset.index);s.dataset.index=m,e.target.classList.contains("previous")&&m>1&&(c.dataset.index=Number(c.dataset.index)-5,s.dataset.index=c.dataset.index,n.textContent=Number(n.textContent)-5,a.textContent=Number(a.textContent)-5,r.textContent=Number(r.textContent)-5,o.textContent=Number(o.textContent)-5,l.textContent=Number(l.textContent)-5,n.dataset.index=Number(n.dataset.index)-5,a.dataset.index=Number(a.dataset.index)-5,r.dataset.index=Number(r.dataset.index)-5,o.dataset.index=Number(o.dataset.index)-5,l.dataset.index=Number(l.dataset.index)-5,m=s.dataset.index);console.log("currentPage>",m),p(),i.gallery.innerHTML="",v()}));var b=v;var y=function(e){var t="https://api.themoviedb.org/3/movie/"+e+"?api_key=50b81e1c6c3b9e5f74d2015b742ff0b0",n=document.querySelector(".lightbox__content"),a=new c.a(u).spin(n);return fetch(t).then((function(e){return e.json()})).catch((function(e){return console.log(e)})).finally((function(){a.stop()}))},g=n("2mXJ"),w=n.n(g);var x=function(e){var t="";"404"!==e.status&&(e.popularity=Math.round(e.popularity),t=w()(e)),i.modalDivContent.insertAdjacentHTML("beforeend",t)};function L(){window.removeEventListener("keydown",q),i.modalDiv.classList.remove("is-open"),i.body.classList.remove("scroll-hidden"),i.upBtn.hidden=!1}function q(e){"Escape"===e.code&&L()}i.gallery.addEventListener("click",(function(e){if("IMG"!==e.target.nodeName)return;if(e.target.dataset.emptyPage)return;var t=e.target;t.dataset.src;!function(e){window.addEventListener("keydown",q),i.modalDiv.classList.add("is-open"),i.body.classList.add("scroll-hidden"),i.upBtn.hidden=!0,i.modalDivContent.innerHTML="",y(e).then((function(e){return x(e)}))}(t.dataset.movieId)})),i.overlayDiv.addEventListener("click",L);n("/YXa"),n("WoWj"),n("U00V"),n("wcNg");var k=n("SJqc"),B=n.n(k);function E(e,t,n,a,r,i,o){try{var l=e[i](o),s=l.value}catch(e){return void n(e)}l.done?t(s):Promise.resolve(s).then(a,r)}function S(e){return function(){var t=this,n=arguments;return new Promise((function(a,r){var i=e.apply(t,n);function o(e){E(i,a,r,o,l,"next",e)}function l(e){E(i,a,r,o,l,"throw",e)}o(void 0)}))}}function C(e){var t="";"404"!==e.status&&(t=B()(e)),i.gallery.insertAdjacentHTML("beforeend",t)}function P(){return(P=S(regeneratorRuntime.mark((function e(t){var n,a,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!localStorage.getItem(t)){e.next=10;break}return i.galleryList.classList.remove("empty-page-style"),i.galleryList.classList.add("gallery"),n=localStorage.getItem(t),a=n.split(","),e.next=7,Promise.all(a.map(function(){var e=S(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/movie/"+t+"?api_key=50b81e1c6c3b9e5f74d2015b742ff0b0&");case 2:return n=e.sent,e.abrupt("return",n.json());case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 7:r=e.sent,console.log(r),r.map((function(e){var t=e.id,n=e.name,a=e.poster_path,r=e.title,i=e.release_date,o=e.genres,l=e.vote_average,s=i.split("-")[0],c=o.map((function(e){return e.name})).join(", ");console.log(o),C([{id:t,name:n,poster_path:a,title:r,releaseDate:s,movieGenres:c,vote_average:l}])}));case 10:i.galleryList.hasChildNodes()||(i.galleryList.classList.add("empty-page-style"),i.galleryList.classList.remove("gallery"),i.gallery.innerHTML='<li><h2>EMPTY<h2><p>Nothing has been added yet :(</p><img class="image" data-empty-page="empty-page" src="https://i0.wp.com/www.ecommerce-nation.com/wp-content/uploads/2017/08/How-to-Give-Your-E-Commerce-No-Results-Page-the-Power-to-Sell.png?fit=1000%2C600&ssl=1" alt="empty page pic"></li>');case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var D=function(e){return P.apply(this,arguments)};function N(){window.location.hash="#queue",i.gallery.innerHTML="",D("queue"),_(i.queueBtn()),_(i.watchedBtn()),i.queueBtn().setAttribute("disabled",!0),i.watchedBtn().removeAttribute("disabled")}function _(e){["btn-nonactive-style","btn-active-style"].map((function(t){return e.classList.toggle(t)}))}i.homeBtn.addEventListener("click",(function(){i.libraryButton.classList.contains("activ-link-style")&&(i.homeBtn.classList.add("activ-link-style"),i.libraryButton.classList.remove("activ-link-style"))}));n("bzha");var j=n("QJ3N");n("zrP5");var M=function(e){j.notice({text:"The movie has been added to the "+e+" list",icon:!0,styling:"custom",delay:700,overlayClosesPinned:!0})};var T=function(e,t,n){var a=[],r=localStorage.getItem(""+t);r&&(a=r.split(",")),a.includes(e)||(a.push(e),M(""+n)),localStorage.setItem(""+t,a)};var O=function(){i.lightbox.addEventListener("click",(function(e){if(event.target.dataset.actionWatched){var t=event.target.dataset.movieId;T(t,"watched",'"WATCHED"')}if(event.target.dataset.actionQueue){var n=event.target.dataset.movieId;T(n,"queue",'"QUEUE"')}}))},A=(n("y89P"),n("GwTD")),H=n.n(A);var I,G=function(){i.homeBtn.classList.contains("activ-link-style")&&(i.homeBtn.classList.remove("activ-link-style"),i.libraryButton.classList.add("activ-link-style")),"#library"===window.location.hash&&(i.pagination.setAttribute("hidden","true"),D("watched")),"#queue"===window.location.hash&&(i.pagination.setAttribute("hidden","true"),N())},W=document.querySelector("#page-header"),J=document.querySelector(".library-ref"),Q=document.querySelector(".search-form"),R=document.querySelector(".ref-wrapper"),U=document.querySelector(".remove");I=H()();var F=function(){Q.remove(),R.insertAdjacentHTML("afterend",I),W.classList.replace("page-header","page-header-library")};J.addEventListener("click",F),U.addEventListener("click",(function(){U.removeEventListener("click",F)}));var X=function(){location.hash&&(F(),U.removeEventListener("click",F),G())};var Y=function(){location.hash||b(),X()};n("X5mX");var z=function(e){return fetch("https://api.themoviedb.org/3/search/movie?api_key=50b81e1c6c3b9e5f74d2015b742ff0b0&language=en-US&page=1&include_adult=false&query="+e).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))};var Z=function(){i.form.addEventListener("submit",(function(e){e.preventDefault();var t=e.currentTarget.elements.search.value;console.log(t),i.gallery.innerHTML="",z(t).then((function(e){var t=e.results;0!==t.length?h().then((function(e){var n=e.genres;f(t,n)})):j.error({text:"There was found nothing for your query",icon:!0,styling:"custom",delay:2e3,overlayClosesPinned:!0})}))}))};Y(),Z(),i.libraryButton.addEventListener("click",(function(){i.pagination.setAttribute("hidden","true"),i.gallery.innerHTML="",D("watched"),i.homeBtn.classList.contains("activ-link-style")&&(i.homeBtn.classList.remove("activ-link-style"),i.libraryButton.classList.add("activ-link-style")),i.queueBtn().classList.contains("btn-active-style")&&(console.log("hello"),_(i.queueBtn()),_(i.watchedBtn()),i.queueBtn().toggleAttribute("disabled"),i.watchedBtn().toggleAttribute("disabled"))})),i.header.addEventListener("click",(function(){event.target.dataset.queueFilmBtn&&N(),event.target.dataset.watchedFilmBtn&&(window.location.hash="#library",i.gallery.innerHTML="",D("watched"),_(i.watchedBtn()),_(i.queueBtn()),i.queueBtn().removeAttribute("disabled"),i.watchedBtn().setAttribute("disabled",!0))})),O();var V,K=n("yWWw"),$=n.n(K),ee=document.querySelector("[data-up-btn]");window.addEventListener("scroll",$()((V=ee,function(e){pageYOffset<document.documentElement.clientHeight?V.classList.add("visually-hidden"):V.classList.remove("visually-hidden")}),250)),ee.addEventListener("click",(function(e){window.scrollTo({top:0,behavior:"smooth"})}))},SJqc:function(e,t,n){var a=n("mp5j");e.exports=(a.default||a).template({1:function(e,t,n,a,r){var i,o,l=null!=t?t:e.nullContext||{},s=e.hooks.helperMissing,c=e.escapeExpression,u=e.lambda,d=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return'<li class="movie-card">\r\n    <img class="movie-poster" src="https://image.tmdb.org/t/p/w500'+c("function"==typeof(o=null!=(o=d(n,"poster_path")||(null!=t?d(t,"poster_path"):t))?o:s)?o.call(l,{name:"poster_path",hash:{},data:r,loc:{start:{line:3,column:66},end:{line:3,column:81}}}):o)+'" alt="'+c("function"==typeof(o=null!=(o=d(n,"title")||(null!=t?d(t,"title"):t))?o:s)?o.call(l,{name:"title",hash:{},data:r,loc:{start:{line:3,column:88},end:{line:3,column:97}}}):o)+'"\r\n        data-movie-id="'+c("function"==typeof(o=null!=(o=d(n,"id")||(null!=t?d(t,"id"):t))?o:s)?o.call(l,{name:"id",hash:{},data:r,loc:{start:{line:4,column:23},end:{line:4,column:29}}}):o)+'">\r\n    <h1 class="movie-title">'+c(u(null!=t?d(t,"title"):t,t))+'</h1>\r\n    <p class="movie-info"> '+c(u(null!=(i=null!=t?d(t,"id"):t)?d(i,"name"):i,t))+'</p>\r\n    <div class="info-wrapper">\r\n        <p class="movie-info">\r\n            '+c(u(null!=t?d(t,"movieGenres"):t,t))+" | "+c(u(null!=t?d(t,"releaseDate"):t,t))+'\r\n        </p>\r\n        <p class="vote">'+c(u(null!=t?d(t,"vote_average"):t,t))+"</p>\r\n    </div>\r\n</li>\r\n"},compiler:[8,">= 4.3.0"],main:function(e,t,n,a,r){var i;return null!=(i=(e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]})(n,"each").call(null!=t?t:e.nullContext||{},t,{name:"each",hash:{},fn:e.program(1,r,0),inverse:e.noop,data:r,loc:{start:{line:1,column:0},end:{line:14,column:9}}}))?i:""},useData:!0})},"v+qO":function(e,t,n){var a=n("mp5j");e.exports=(a.default||a).template({1:function(e,t,n,a,r){var i,o=null!=t?t:e.nullContext||{},l=e.hooks.helperMissing,s="function",c=e.escapeExpression,u=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return'<li class="movie-card">\r\n    <img class="movie-poster" src="https://image.tmdb.org/t/p/w500'+c(typeof(i=null!=(i=u(n,"poster_path")||(null!=t?u(t,"poster_path"):t))?i:l)===s?i.call(o,{name:"poster_path",hash:{},data:r,loc:{start:{line:5,column:66},end:{line:5,column:81}}}):i)+'" alt="'+c(typeof(i=null!=(i=u(n,"title")||(null!=t?u(t,"title"):t))?i:l)===s?i.call(o,{name:"title",hash:{},data:r,loc:{start:{line:5,column:88},end:{line:5,column:97}}}):i)+'"\r\n        data-movie-id="'+c(typeof(i=null!=(i=u(n,"id")||(null!=t?u(t,"id"):t))?i:l)===s?i.call(o,{name:"id",hash:{},data:r,loc:{start:{line:6,column:23},end:{line:6,column:29}}}):i)+'">\r\n    <h1 class="movie-title">'+c(typeof(i=null!=(i=u(n,"title")||(null!=t?u(t,"title"):t))?i:l)===s?i.call(o,{name:"title",hash:{},data:r,loc:{start:{line:7,column:28},end:{line:7,column:37}}}):i)+'</h1>\r\n    <p class="movie-info"> '+c(typeof(i=null!=(i=u(n,"movieGenres")||(null!=t?u(t,"movieGenres"):t))?i:l)===s?i.call(o,{name:"movieGenres",hash:{},data:r,loc:{start:{line:8,column:27},end:{line:8,column:42}}}):i)+" | "+c(typeof(i=null!=(i=u(n,"releaseDate")||(null!=t?u(t,"releaseDate"):t))?i:l)===s?i.call(o,{name:"releaseDate",hash:{},data:r,loc:{start:{line:8,column:45},end:{line:8,column:60}}}):i)+"</p>\r\n</li>\r\n"},compiler:[8,">= 4.3.0"],main:function(e,t,n,a,r){var i;return"\x3c!-- Шаблон карточки фильмов --\x3e\r\n\r\n"+(null!=(i=(e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]})(n,"each").call(null!=t?t:e.nullContext||{},t,{name:"each",hash:{},fn:e.program(1,r,0),inverse:e.noop,data:r,loc:{start:{line:3,column:0},end:{line:10,column:9}}}))?i:"")},useData:!0})},w1z4:function(e,t){!function(){var e={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector(".team-modal-close-button"),modal:document.querySelector(".backdrop")};function t(){e.modal.classList.add("is-hidden"),window.removeEventListener("keydown",n),e.closeModalBtn.removeEventListener("click",t),e.modal.removeEventListener("click",t)}function n(e){"Escape"===e.code&&t()}e.openModalBtn.addEventListener("click",(function(){e.modal.classList.remove("is-hidden"),window.addEventListener("keydown",n),e.closeModalBtn.addEventListener("click",t),e.modal.addEventListener("click",t)}))}()}},[["QfWi",1,2]]]);
//# sourceMappingURL=main.3d5fb88314f0fc8fb0f8.js.map