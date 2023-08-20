const play = document.querySelector('.play-icon');
const audio = document.querySelector('.audio');
const playPauseIcon = document.querySelector('.pause-play-icon')
const liveTag = document.querySelector('.live-pause')
const livePause = document.querySelector('.live-pause')
const vol = document.querySelector('.vol');
const num = document.querySelector('.num')
const mobileNavIcon = document.querySelector('.mobile-icon')
const navMobile = document.querySelector('.nav_top__mobile')

//check if is playing
let audioPlaying = false;

//audio.setAttribute('src', 'https://stream-149.zeno.fm/9sw1dvaeh5zuv?zs=DhG0H21uRZmEPB6KQKW4pQ')

//play 
function playAudio(){
    audioPlaying =true;
    audio.setAttribute('src', 'https://stream-149.zeno.fm/9sw1dvaeh5zuv?zs=DhG0H21uRZmEPB6KQKW4pQ')
    audio.play();
    playPauseIcon.setAttribute('xlink:href', 'sprite.svg#pause')
    livePause.innerHTML = "live";
    play.setAttribute('title','Pause')
}

//pause
function pauseAudio(){
    audioPlaying = false;
    audio.pause();
    playPauseIcon.setAttribute('xlink:href', 'sprite.svg#play')
    livePause.innerHTML = "paused";
    play.setAttribute('title','Pause')
}

// Play or Pause Event Listener
play.addEventListener('click', () => (audioPlaying ? pauseAudio() : playAudio()))

//volume control
vol.oninput = function(){
    audio.volume = vol.value/100;
    num.innerHTML = vol.value;
}

//opening mobile nav

mobileNavIcon.addEventListener('click', () => (navMobile.classList.toggle('hide')))