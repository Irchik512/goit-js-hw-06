const value = document.querySelector("#value");
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
let counterValue = 0;

const decrementValue = () => (value.textContent = counterValue -= 1);
const incrementValue = () => (value.textContent = counterValue);

decrementBtn.addEventListener("click", decrementValue);
incrementBtn.addEventListener("click", incrementValue);
