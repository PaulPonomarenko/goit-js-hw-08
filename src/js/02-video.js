import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const currentTime = 'videoplayer-current-time';
function setCurrentTime(data) {
  localStorage.setItem(currentTime, data.seconds);
}
player.on('timeupdate', throttle(setCurrentTime, 1000));
checkedTime();
function checkedTime() {
  if (localStorage.getItem(currentTime)) {
    player.setCurrentTime(localStorage.getItem(currentTime));
  }
}
