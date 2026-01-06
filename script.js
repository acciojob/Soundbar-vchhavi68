//your JS code here. If required.
let currentAudio = null;


const soundButtons = document.querySelectorAll('.btn');
const stopButton = document.querySelector('.stop');


soundButtons.forEach(button => {
  button.addEventListener('click', () => {
    const soundFile = button.getAttribute('data-sound');
    
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }
    
    currentAudio = new Audio(`sounds/${soundFile}`);
    currentAudio.play();
  });
});


stopButton.addEventListener('click', () => {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }
});
