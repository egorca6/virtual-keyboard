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
document
  .querySelector("body > main > div > div:nth-child(1) > div:nth-child(14)")
  .classList.add("black");
document;
//   .querySelector("body > main > div > div:nth-child(2) > div:nth-child(1)")
//   .classList.add("black");
// document
//   .querySelector("body > main > div > div:nth-child(3) > div:nth-child(13)")
//   .classList.add("black");
// document
//   .querySelector("body > main > div > div:nth-child(3) > div:nth-child(1)")
//   .classList.add("black");
// document
//   .querySelector("body > main > div > div:nth-child(4) > div:nth-child(1)")
//   .classList.add("black");
// document
//   .querySelector("body > main > div > div:nth-child(5) > div:nth-child(1)")
//   .classList.add("black");
// console.log(document.getElementsByClassName("button")[11]);

const info = document.createElement("h4");
info.textContent = "Клавиатура создана в операционной системе Windows";
keyboard.after(info);

const info2 = document.createElement("h4");
info2.textContent = "Для переключения языка комбинация: левыe ctrl + alt";
keyboard.after(info2);

document.addEventListener("keydown", (event) => {
  if (event.key == "Backspace") {
    text.textContent = text.textContent.slice(0, text.textContent.length - 1);
  } else if (event.key == "Tab") {
    event.preventDefault();
    text.textContent += "  ";
  } else {
    text.textContent += event.key;
  }
  // button.classList.add("active");

  // document.querySelector("button").classList.add("active");
  // document.getElementsByClassName("button")[16].classList.add("active");
  for (let i = 0; i < 64; i++) {
    if (event.key == document.getElementsByClassName("button")[i].innerText)
      document.getElementsByClassName("button")[i].classList.add("active");
    // document.getElementsByClassName("button")[i].style.backgroundColor = "red";
  }

  // console.log(event.code);
  // console.log("ИТого = " + text.textContent);
  // console.log(document.activeElement);
  console.log("event.key = " + event.key);
  console.log("event.code = " + event.code);
  // console.log(event.currentTarget);
});

document.addEventListener("keyup", (event) => {
  // for (let i = 0; i < 64; i++) {
  //   if (event.key == document.getElementsByClassName("button")[i].innerText)
  //     document.getElementsByClassName("button")[i].classList.remove("active");
  // }
  // document.getElementsByClassName("button")[16].classList.remove("active");
});
// console.log(document.querySelector("keyboard"));
// console.log(document.querySelectorALL("body > main > div"));
// console.log(document.getElementsByClassName("button")[16].innerText);
