const { body } = document;
const main = document.createElement('main');
main.classList.add('main');
body.append(main);
const title = document.createElement('h1');
title.textContent = 'RSS Виртуальная клавиатура';
main.append(title);
const text = document.createElement('textarea');
main.append(text);
const keyboard = document.createElement('div');
keyboard.classList.add('keyboard');
main.append(keyboard);

const keyboardRow1 = document.createElement('div');
keyboardRow1.classList.add('keyboard-row');
keyboard.append(keyboardRow1);

const keyboardRow2 = document.createElement('div');
keyboardRow2.classList.add('keyboard-row');
keyboard.append(keyboardRow2);

const keyboardRow3 = document.createElement('div');
keyboardRow3.classList.add('keyboard-row');
keyboard.append(keyboardRow3);

const keyboardRow4 = document.createElement('div');
keyboardRow4.classList.add('keyboard-row');
keyboard.append(keyboardRow4);

const keyboardRow5 = document.createElement('div');
keyboardRow5.classList.add('keyboard-row');
keyboard.append(keyboardRow5);

const english = ['`', 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '-', '=', 'Backspace', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del', 'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', ' Enter', 'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '\u25B2', 'Shift', 'Ctrl', 'Win', 'Alt', '', 'Alt',
  '', '\u25C4', '\u25BC', '\u25B6', 'Ctrl'];

const englishShift = {
  0: '~',
  1: '!',
  2: '@',
  3: '#',
  4: '$',
  5: '%',
  6: '^',
  7: '&',
  8: '*',
  9: '(',
  10: ')',
  11: '_',
  12: '+',
  25: '{',
  26: '}',
  27: '|',
  39: ':',
  40: '"',
  50: '<',
  51: '>',
  52: '?',
};

const russianShift = {
  1: '!',
  2: '"',
  3: '№',
  4: ';',
  5: '%',
  6: ':',
  7: '?',
  8: '*',
  9: '(',
  10: ')',
  11: '_',
  12: '+',
  27: '/',
  52: ',',
};

const russian = ['ё', 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '-', '=', 'Backspace', 'Tab',
  'й',
  'ц',
  'у',
  'к',
  'е',
  'н',
  'г',
  'ш',
  'щ',
  'з',
  'х',
  'ъ',
  '\\',
  'Del',
  'CapsLock',
  'ф',
  'ы',
  'в',
  'а',
  'п',
  'р',
  'о',
  'л',
  'д',
  'ж',
  'э',
  'Enter',
  'Shift',
  'я',
  'ч',
  'с',
  'м',
  'и',
  'т',
  'ь',
  'б',
  'ю',
  '.',
  '\u25B2',
  'Shift',
  'Ctrl',
  'Win',
  'Alt',
  '',
  'Alt',
  '\u25C4',
  '\u25BC',
  '\u25B6',
  'Ctrl'];

function createButton(arr) {
  for (let i = 0; i < 14; i += 1) {
    const button = document.createElement('div');
    button.classList.add('button');
    button.textContent = `${arr[i]}`;
    keyboardRow1.append(button);
  }
}
createButton(russian);

function createButton2(arr) {
  for (let i = 14; i < 29; i += 1) {
    const button = document.createElement('div');
    button.classList.add('button');
    button.textContent = `${arr[i]}`;
    keyboardRow2.append(button);
  }
}
createButton2(russian);

function createButton3(arr) {
  for (let i = 29; i < 42; i += 1) {
    const button = document.createElement('div');
    button.classList.add('button');
    button.textContent = `${arr[i]}`;
    keyboardRow3.append(button);
  }
}
createButton3(russian);

function createButton4(arr) {
  for (let i = 42; i < 55; i += 1) {
    const button = document.createElement('div');
    button.classList.add('button');
    button.textContent = `${arr[i]}`;
    keyboardRow4.append(button);
  }
}
createButton4(russian);

function createButton5(arr) {
  for (let i = 55; i < arr.length; i += 1) {
    const button = document.createElement('div');
    button.classList.add('button');
    button.textContent = `${arr[i]}`;
    keyboardRow5.append(button);
  }
}
createButton5(russian);

const info = document.createElement('h4');
info.textContent = 'Клавиатура создана в операционной системе Windows';
keyboard.after(info);

const info2 = document.createElement('h4');
info2.textContent = 'Для переключения языка комбинация: левыe shift + alt';
keyboard.after(info2);
const DEL = document.querySelector(
  'body > main > div > div:nth-child(2) > div:nth-child(15)',
);
const ARROW_UP = document.querySelector(
  'body > main > div > div:nth-child(4) > div:nth-child(12)',
);
const ARROW_LEFT = document.querySelector(
  'body > main > div > div:nth-child(5) > div:nth-child(6)',
);
const ARROW_DOWN = document.querySelector(
  'body > main > div > div:nth-child(5) > div:nth-child(7)',
);
const ARROW_RIGHT = document.querySelector(
  'body > main > div > div:nth-child(5) > div:nth-child(8)',
);

const CTR_LEFT = document.querySelector(
  'body > main > div > div:nth-child(5) > div:nth-child(1)',
);
const CTR_RIGHT = document.querySelector(
  'body > main > div > div:nth-child(5) > div:nth-child(9)',
);
const SPACE = document.querySelector(
  'body > main > div > div:nth-child(5) > div:nth-child(4)',
);
const ALT_LEFT = document.querySelector(
  'body > main > div > div:nth-child(5) > div:nth-child(3)',
);
const ALT_RIGHT = document.querySelector(
  'body > main > div > div:nth-child(5) > div:nth-child(5)',
);
const WIN = document.querySelector(
  'body > main > div > div:nth-child(5) > div:nth-child(2)',
);
const SHIFT_LEFT = document.querySelector(
  'body > main > div > div:nth-child(4) > div:nth-child(1)',
);
const SHIFT_RIGHT = document.querySelector(
  'body > main > div > div:nth-child(4) > div:nth-child(13)',
);
const BACKSPACE = document.querySelector(
  'body > main > div > div:nth-child(1) > div:nth-child(14)',
);
const TAB = document.querySelector(
  'body > main > div > div:nth-child(2) > div:nth-child(1)',
);
const ENTER = document.querySelector(
  'body > main > div > div:nth-child(3) > div:nth-child(13)',
);
const CAPS = document.querySelector(
  'body > main > div > div:nth-child(3) > div:nth-child(1)',
);

document.addEventListener('keydown', (event) => {
  if (event.key === 'Backspace') {
    text.textContent = text.textContent.slice(0, text.textContent.length - 1);
    BACKSPACE.classList.add('active');
  } else if (event.key === 'Tab') {
    event.preventDefault();
    text.textContent += '  ';
    TAB.classList.add('active');
  } else if (event.key === 'Delete') {
    event.preventDefault();
    DEL.classList.add('active');
  } else if (event.key === 'ArrowUp') {
    event.preventDefault();
    ARROW_UP.classList.add('active');
    text.textContent += '\u25B2';
  } else if (event.key === 'ArrowLeft') {
    event.preventDefault();
    ARROW_LEFT.classList.add('active');
    text.textContent += '\u25C4';
  } else if (event.key === 'ArrowRight') {
    event.preventDefault();
    ARROW_RIGHT.classList.add('active');
    text.textContent += '\u25B6';
  } else if (event.key === 'ArrowDown') {
    event.preventDefault();
    ARROW_DOWN.classList.add('active');
    text.textContent += '\u25BC';
  } else if (event.code === 'ControlLeft') {
    event.preventDefault();
    CTR_LEFT.classList.add('active');
  } else if (event.code === 'ControlRight') {
    event.preventDefault();
    CTR_RIGHT.classList.add('active');
  } else if (event.code === 'Space') {
    text.textContent += ' ';
    SPACE.classList.add('active');
  } else if (event.code === 'AltLeft') {
    event.preventDefault();
    ALT_LEFT.classList.add('active');
  } else if (event.code === 'AltRight') {
    event.preventDefault();
    ALT_RIGHT.classList.add('active');
  } else if (event.code === 'MetaLeft') {
    WIN.classList.add('active');
  } else if (event.code === 'ShiftLeft') {
    SHIFT_LEFT.classList.add('active');
    for (let i = 0; i < 52; i += 1) {
      if (i === 0 || (i >= 15 && i <= 26) || (i >= 30 && i <= 40) || (i >= 43 && i <= 51)) {
        document.getElementsByClassName('button')[i].innerText = document.getElementsByClassName('button')[i].innerText.toUpperCase();
      }
    }
  } else if (event.code === 'ShiftRight') {
    SHIFT_RIGHT.classList.add('active');
    for (let i = 0; i < 52; i += 1) {
      if (i === 0 || (i >= 15 && i <= 26) || (i >= 30 && i <= 40) || (i >= 43 && i <= 51)) {
        document.getElementsByClassName('button')[i].innerText = document.getElementsByClassName('button')[i].innerText.toUpperCase();
      }
    }
  } else if (event.code === 'Enter') {
    event.preventDefault();
    ENTER.classList.add('active');
  } else if (event.code === 'CapsLock') {
    CAPS.classList.add('active');
    if (event.getModifierState('CapsLock')) {
      for (let i = 0; i < 52; i += 1) {
        if (i === 0 || (i >= 15 && i <= 26) || (i >= 30 && i <= 40) || (i >= 43 && i <= 51)) {
          document.getElementsByClassName('button')[i].innerText = document.getElementsByClassName('button')[i].innerText.toUpperCase();
        }
      }
    } else {
      for (let i = 0; i < 52; i += 1) {
        if (i === 0 || (i >= 15 && i <= 26) || (i >= 30 && i <= 40) || (i >= 43 && i <= 51)) {
          document.getElementsByClassName('button')[i].innerText = document.getElementsByClassName('button')[i].innerText.toLowerCase();
        }
      }
    }
  } else {
    text.textContent += event.key;
    for (let i = 0; i < 64; i += 1) {
      if (event.key === document.getElementsByClassName('button')[i].innerText) {
        document.getElementsByClassName('button')[i].classList.add('active');
      }
    }
  }
  console.log(`event.key = ${event.key}`);
  console.log(`event.code = ${event.code}`);
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Shift') {
    if (document.getElementsByClassName('button')[15].innerText === 'q' || document.getElementsByClassName('button')[15].innerText === 'Q') {
      for (let i = 0; i < 54; i += 1) {
        if (i <= 12 || (i >= 25 && i <= 27) || (i >= 39 && i <= 40) || (i >= 50 && i <= 52)) {
          document.getElementsByClassName('button')[i].innerText = englishShift[i];
        }
      }
    } else {
      for (let i = 1; i < 53; i += 1) {
        if (i <= 12 || (i === 27) || (i === 52)) {
          document.getElementsByClassName('button')[i].innerText = russianShift[i];
        }
      }
    }
  }
});

document.addEventListener('keyup', (event) => {
  for (let i = 0; i < 64; i += 1) {
    if (event.key === document.getElementsByClassName('button')[i].innerText) {
      document.getElementsByClassName('button')[i].classList.remove('active');
    }
  }
  if (event.code === 'ShiftLeft') {
    for (let i = 0; i < 52; i += 1) {
      if (i === 0 || (i >= 15 && i <= 26) || (i >= 30 && i <= 40) || (i >= 43 && i <= 51)) {
        document.getElementsByClassName('button')[i].innerText = document.getElementsByClassName('button')[i].innerText.toLowerCase();
      }
    }
  }
  if (event.code === 'ShiftRight') {
    for (let i = 0; i < 52; i += 1) {
      if (i === 0 || (i >= 15 && i <= 26) || (i >= 30 && i <= 40) || (i >= 43 && i <= 51)) {
        document.getElementsByClassName('button')[i].innerText = document.getElementsByClassName('button')[i].innerText.toLowerCase();
      }
    }
  }
  if (event.key === 'Shift') {
    if (document.getElementsByClassName('button')[15].innerText === 'q' || document.getElementsByClassName('button')[15].innerText === 'Q') {
      for (let i = 0; i < 54; i += 1) {
        if (i <= 12 || (i >= 25 && i <= 27) || (i >= 39 && i <= 40) || (i >= 50 && i <= 52)) {
          document.getElementsByClassName('button')[i].innerText = english[i];
        }
      }
    } else {
      for (let i = 0; i < 53; i += 1) {
        if (i <= 12 || (i === 27) || (i === 52)) {
          document.getElementsByClassName('button')[i].innerText = russian[i];
        }
      }
    }
  }
  DEL.classList.remove('active');
  ARROW_UP.classList.remove('active');
  ARROW_LEFT.classList.remove('active');
  ARROW_DOWN.classList.remove('active');
  ARROW_RIGHT.classList.remove('active');
  CTR_LEFT.classList.remove('active');
  CTR_RIGHT.classList.remove('active');
  SPACE.classList.remove('active');
  WIN.classList.remove('active');
  SHIFT_LEFT.classList.remove('active');
  SHIFT_RIGHT.classList.remove('active');
  ALT_LEFT.classList.remove('active');
  ALT_RIGHT.classList.remove('active');
  BACKSPACE.classList.remove('active');
});

document.addEventListener('keydown', (event) => {
  if (event.altKey && event.shiftKey) {
    if (document.getElementsByClassName('button')[15].innerText === 'й' || document.getElementsByClassName('button')[15].innerText === 'Й') {
      for (let i = 0; i < 54; i += 1) {
        if (i === 0 || (i >= 15 && i <= 26) || (i >= 30 && i <= 40) || (i >= 43 && i <= 54)) {
          document.getElementsByClassName('button')[i].innerText = english[i];
        }
      }
    } else {
      for (let i = 0; i < 54; i += 1) {
        if (i === 0 || (i >= 15 && i <= 26) || (i >= 30 && i <= 40) || (i >= 43 && i <= 54)) {
          document.getElementsByClassName('button')[i].innerText = russian[i];
        }
      }
    }
  }
});
// console.log(window.localStorage.getItem('Localelanguage'));
// window.addEventListener('beforeunload', (e) => {
//   e.preventDefault();
//   document.getElementsByClassName('button')[0].innerText = 'G';
//   e.returnValue = '';
// });
