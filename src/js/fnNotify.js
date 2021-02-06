import '@pnotify/core/dist/PNotify.css';
import * as PNotify from '@pnotify/core';
import '@pnotify/core/dist/BrightTheme.css';

function notify(nameOfList) {
  PNotify.notice({
    text: `The movie has been added to the ${nameOfList} list`,
    icon: true,
    styling: 'custom',
    delay: 1500,
    overlayClosesPinned: true,
  });
}

function authNotify() {
  PNotify.notice({
    text: `Please sign in first`,
    icon: true,
    styling: 'custom',
    delay: 1500,
    overlayClosesPinned: true,
  });
}

// function signOutNotify() {
//   PNotify.notice({
//     text: `you are logged out`,
//     icon: true,
//     styling: 'custom',
//     delay: 1000,
//     overlayClosesPinned: true,
//   });
// }

export { authNotify, notify };
