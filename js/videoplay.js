const video = document.getElementById('vid');
const vidBtn = document.getElementById('video-button');
const playBtn = document.getElementById('vid-play');

vidBtn.style.display = 'block';
playBtn.style.display = 'block';
function play(){
    if(video.paused){
        video.play();
        vidBtn.style.display = 'none';
    } else {
        video.pause();
        vidBtn.style.display = 'block';
    }
}
