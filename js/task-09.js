const changeColorBtnRef = document.querySelector(".change-color");
const chengeColorTextRef = document.querySelector(".color");
const body = document.querySelector("body");

changeColorBtnRef.addEventListener("click", onColorChange);

function onColorChange(event) {
  console.log(event);
  const colorToChange = getRandomHexColor();
  chengeColorTextRef.textContent = colorToChange;
  body.style.backgroundColor = colorToChange;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
