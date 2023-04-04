import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const docFrame = document.querySelector('iframe');
const player = new Player(docFrame);
player.on('timeupdate', throttle(timeUpdate, 1000));
function timeUpdate(event) {
  localStorage.setItem('videoplayer-current-time', event.seconds);
};
const getTime = (localStorage.getItem('videoplayer-current-time'));
if (getTime !== null) {
  player.setCurrentTime(getTime)
};