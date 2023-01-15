const counter = document.querySelector("#value");
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
let counterValue = 0;

const handleDecrementBtnClick = () => {
  counterValue -= 1;
  counter.innerHTML = counterValue;
};

const handleIncrementBtnClick = () => {
  counterValue += 1;
  counter.innerHTML = counterValue;
};
decrementBtn.addEventListener("click", handleDecrementBtnClick);
incrementBtn.addEventListener("click", handleIncrementBtnClick);
