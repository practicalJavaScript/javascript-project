const stats = document.querySelector('.stats');
const btnStart = document.querySelector('button[name=start]');
const btnClick = document.querySelector('button[name=click]');

const winScore = 10;

let count = 0;

btnStart.addEventListener('click', () => {
  start();
});

btnClick.addEventListener('click', () => {
  count++;
  stats.textContent = count;
});

const start = () => {
  count = 0;

  stats.textContent = count;

  btnClick.removeAttribute('disabled');

  startCounting();
}

const startCounting = () => {
  setTimeout(() => {
    if(isWin()) {
      stats.textContent = 'You Won!';
    } else {
      stats.textContent = 'You Lost!';
    }
    btnClick.setAttribute('disabled', true);
  }, 2000);
}

const isWin = () => {
  if(count < winScore) {
    return false;
  } else {
    return true;
  }
}
