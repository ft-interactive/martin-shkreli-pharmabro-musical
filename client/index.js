const audio = document.querySelector('audio');

audio.addEventListener('timeupdate', (a) => {
  const percentProgress = (a.target.currentTime * 100) / a.target.duration;
  const browserWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  const maxLeft = 100 * (1 - (35 / browserWidth));

  const progressImage = document.querySelector('.g-audio--block img');
  progressImage.style.left = `${Math.min(percentProgress, maxLeft)}%`;
});
