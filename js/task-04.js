const value = document.querySelector("#value");
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
let counterValue = 0;

decrementBtn.addEventListener("click", decrementValue);
incrementBtn.addEventListener("click", incrementValue);

const decrementValue = () => {
  counterValue -= 1;
  return (value.textContent = counterValue);
};
const incrementValue = () => {
  counterValue += 1;
  return (value.textContent = counterValue);
};
