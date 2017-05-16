'use strict';

var audio = document.querySelector('audio');

audio.addEventListener('timeupdate', function (a) {
  var percentProgress = a.target.currentTime * 100 / a.target.duration;

  var progressImage = document.querySelector('.g-audio--block img');
  progressImage.style.left = Math.min(percentProgress, 97.5) + '%';
});

// const audio = document.querySelector('audio');
//
// audio.addEventListener('timeupdate', (a) => {
//   const percentProgress = (a.target.currentTime * 100) / a.target.duration;
//
//   const progressImage = document.querySelector('.g-audio--block img');
//   progressImage.style.left = `${Math.min(percentProgress, 97.5)}%`;
// });
