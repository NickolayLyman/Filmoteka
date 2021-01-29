import '@pnotify/core/dist/PNotify.css';
import * as PNotify from '@pnotify/core';
import '@pnotify/core/dist/BrightTheme.css';

function notify(nameOfList) {
  PNotify.notice({
    text: `The movie has been added to the list ${nameOfList}`,
    icon: true,
    //delay: 5000,
    closer: false,
    styling: 'custom',
    delay: 1000,
    overlayClosesPinned: true,
  });
}

export default notify;
