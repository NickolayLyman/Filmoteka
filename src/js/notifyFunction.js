import '@pnotify/core/dist/PNotify.css';
import * as PNotify from '@pnotify/core';
import '@pnotify/core/dist/BrightTheme.css';
import refs from './refs';

function notify(nameOfList) {
  PNotify.notice({
    text: `The movie has been added to the ${nameOfList} list`,
    icon: true,
    styling: 'custom',
    delay: 700,
    overlayClosesPinned: true,
  });
};

 function error () {
  PNotify.error({
    text: 'There was found nothing for your query',
    icon: true,
    styling: 'custom',
    delay: 2000,
    overlayClosesPinned: true,
  })
}

function empty () {
  PNotify.error({
    text: 'Please, fill in the query field',
    icon: true,
    styling: 'custom',
    delay: 2000,
    overlayClosesPinned: true,
  })
}
  export default notify;
export { error as error, empty as empty };