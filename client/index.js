'use strict';

var audio = document.querySelector('audio');

audio.addEventListener('timeupdate', function (a) {
  var percentProgress = a.target.currentTime * 100 / a.target.duration;

  var browserWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  var maxLeft = 100 * (1 - (35 / browserWidth));

  var progressImage = document.querySelector('.g-audio--block img');
  progressImage.style.left = Math.min(percentProgress, maxLeft) + '%';
});

// const audio = document.querySelector('audio');
//
// audio.addEventListener('timeupdate', (a) => {
//   const percentProgress = (a.target.currentTime * 100) / a.target.duration;
//
//   const progressImage = document.querySelector('.g-audio--block img');
//   progressImage.style.left = `${Math.min(percentProgress, 97.5)}%`;
// });
