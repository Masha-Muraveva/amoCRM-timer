const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

const createTimerAnimator = () => {
  let intervalCounter;

  return (seconds) => {
    clearInterval(intervalCounter);
    let initialSeconds = seconds;
   
    intervalCounter = setInterval(() => {
      if (initialSeconds > 0) {
        initialSeconds --;
        let h = Math.floor(initialSeconds / 3600);
        let m = Math.floor((initialSeconds - h * 3600) / 60);
        let s = Math.floor(initialSeconds - (h * 3600) - (m * 60));
        let time = (h < 10 ? "0" + h : h) + ":" + (m < 10 ? "0" + m : m) + ":" + (s < 10 ? "0" + s : s);
        timerEl.textContent = time;
      } 
      else {
        clearInterval(intervalCounter);
      }
    }, 1000);
  };
}

const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', () => {
  inputEl.value = inputEl.value.replace(/[^0-9\.]/g, '');
});

buttonEl.addEventListener('click', () => {
  const seconds = Number(inputEl.value);
  animateTimer(seconds);
  inputEl.value = '';
});


