const selectKeypad = document.querySelector('.keypad');
const selectInput = document.querySelector('input[name=input]');
const selectEqualBtn = document.querySelector('.btn-equal');
const selectResult = document.querySelector('.result p');

let data = '';

selectInput.addEventListener('change', (e) => {
  data = e.target.value;
  equalBtnState(e.target.value);
})

selectKeypad.addEventListener('click', (e) => {
  if(e.target.tagName==='P') {
    switch (e.target.textContent) {
      case 'C':
        data = '';
        break;
      case '=':
        break;
      case 'x':
        data += '*';
        break;
      case '%':
        data += '/100*'
        break;
      default:
        data += e.target.textContent;
    }
    selectInput.value = data;

    equalBtnState(selectInput.value);
  }
})

selectEqualBtn.addEventListener('click', () => {
  if(!selectEqualBtn.classList.contains('disabled')) {
    const result = eval(data);
    selectResult.textContent = result;
  }
})

const equalBtnState = (value) => {
  if(validateInput(value)) {
    selectEqualBtn.classList.remove('disabled');
  } else {
    selectEqualBtn.classList.add('disabled');
  }
}

const validateInput = input => {
  return (/^[-+]?[0-9\.]+?([-+*/x%]+[-+]?[0-9\.]+)*$/).test(input);
}
