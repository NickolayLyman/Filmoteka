import '@pnotify/core/dist/PNotify.css';
import * as PNotify from '@pnotify/core';
import '@pnotify/core/dist/BrightTheme.css';

function notify(nameOfList) {
  PNotify.notice({
    text: `The movie has been added to the ${nameOfList} list`,
    icon: true,
    styling: 'custom',
    delay: 700,
    overlayClosesPinned: true,
  });
};


  export default notify;
