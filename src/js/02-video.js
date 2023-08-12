
import Player from '@vimeo/player'
import throttle from 'lodash.throttle';
console.log(Player)



    const iframe = document.querySelector('iframe');
    const player = new Player(iframe);

player.on('timeupdate', throttle(onCurrentTime, 1000));

function onCurrentTime(data) {
    const currentTime = data.seconds;
 localStorage.setItem('videoplayer-current-time', currentTime)
}
const currentStorage = localStorage.getItem('videoplayer-current-time')

if (currentStorage) {
    player.setCurrentTime(currentStorage) 
}




