let body = document.body;
// body.classList.add("new");
const main = document.createElement("main");
main.classList.add("main");
body.append(main);
const title = document.createElement("h1");
title.textContent = "RSS Виртуальная клавиатура";
main.append(title);
const text = document.createElement("textarea");
main.append(text);
const keyboard = document.createElement("div");
keyboard.classList.add("keyboard");
main.append(keyboard);

const keyboardRow1 = document.createElement("div");
keyboardRow1.classList.add("keyboard-row");
keyboard.append(keyboardRow1);

const keyboardRow2 = document.createElement("div");
keyboardRow2.classList.add("keyboard-row");
keyboard.append(keyboardRow2);

const keyboardRow3 = document.createElement("div");
keyboardRow3.classList.add("keyboard-row");
keyboard.append(keyboardRow3);

const keyboardRow4 = document.createElement("div");
keyboardRow4.classList.add("keyboard-row");
keyboard.append(keyboardRow4);

const keyboardRow5 = document.createElement("div");
keyboardRow5.classList.add("keyboard-row");
keyboard.append(keyboardRow5);

const firstRow = ["ё", 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "-", "=", "Backspace"];
const secondRow = [
  "Tab",
  "й",
  "ц",
  "у",
  "к",
  "е",
  "н",
  "г",
  "ш",
  "щ",
  "з",
  "х",
  "ъ",
  "/",
  "Del",
];
const thirdRow = [
  "CapsLock",
  "ф",
  "ы",
  "в",
  "а",
  "п",
  "р",
  "о",
  "л",
  "д",
  "ж",
  "э",
  "Enter",
];

const fourthRow = [
  "Shift",
  "я",
  "ч",
  "с",
  "м",
  "и",
  "т",
  "ь",
  "б",
  "ю",
  ".",
  "\u25B2",
  "Shift",
];

const fifthRow = [
  "Ctrl",
  "Win",
  "Alt",
  "",
  "Alt",
  "\u25C4",
  "\u25BC",
  "\u25B6",
  "Ctrl",
];

function createButton(arr) {
  for (let i = 0; i < arr.length; i++) {
    let button = document.createElement("div");
    button.classList.add("button");
    button.textContent = `${arr[i]}`;
    keyboardRow1.append(button);
  }
}
createButton(firstRow);

function createButton2(arr) {
  for (let i = 0; i < arr.length; i++) {
    let button = document.createElement("div");
    button.classList.add("button");
    button.textContent = `${arr[i]}`;
    keyboardRow2.append(button);
  }
}
createButton2(secondRow);

function createButton3(arr) {
  for (let i = 0; i < arr.length; i++) {
    let button = document.createElement("div");
    button.classList.add("button");
    button.textContent = `${arr[i]}`;
    keyboardRow3.append(button);
  }
}
createButton3(thirdRow);

function createButton4(arr) {
  for (let i = 0; i < arr.length; i++) {
    let button = document.createElement("div");
    button.classList.add("button");
    button.textContent = `${arr[i]}`;
    keyboardRow4.append(button);
  }
}
createButton4(fourthRow);

function createButton5(arr) {
  for (let i = 0; i < arr.length; i++) {
    let button = document.createElement("div");
    button.classList.add("button");
    button.textContent = `${arr[i]}`;
    keyboardRow5.append(button);
  }
}
createButton5(fifthRow);

const info = document.createElement("h4");
info.textContent = "Клавиатура создана в операционной системе Windows";
keyboard.after(info);

const info2 = document.createElement("h4");
info2.textContent = "Для переключения языка комбинация: левыe ctrl + alt";
keyboard.after(info2);
