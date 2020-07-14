const form = document.querySelector(".js-grettingForm");
const input = form.querySelector("input");
const gretting = document.querySelector(".js-gretting");

const USER_NAME = "currentUser";
const SHWOING_CN = "showing";

function saveName(text) {
  localStorage.setItem(USER_NAME, text);
}

function handleSubmit(event) {
  event.preventDefault();
  const inputValue = input.value;
  paintGretting(inputValue);
  saveName(inputValue);
}

function askUserName() {
  form.classList.add(SHWOING_CN);
  form.addEventListener("submit", handleSubmit);
}

function paintGretting(text) {
  form.classList.remove(SHWOING_CN);
  gretting.classList.add(SHWOING_CN);
  gretting.innerText = `Hello ${text}`;
}

function loadName() {
  const currentUser = localStorage.getItem(USER_NAME);
  if (currentUser == null) {
    askUserName();
  } else {
    paintGretting(currentUser);
  }
}

function init() {
  loadName();
}

init();
