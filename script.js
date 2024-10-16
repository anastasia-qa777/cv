let audio = document.querySelector('audio');
document.addEventListener('click', (event) => {
   if (event.target.closest('.mario-img')) {
      mario.classList.remove('duble_jump');
      mario.classList.add('jump');
      audio.play();
   }
   if (event.target.closest('.green__pipe')) {
      mario.classList.remove('jump');
      mario.classList.add('duble_jump');
   }
})