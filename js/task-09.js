function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColorBtn = document.querySelector(".change-color");
const textSpan = document.querySelector(".color");

changeColorBtn.addEventListener("click", (event) => {
  const getColor = getRandomHexColor();
  document.body.style.backgroundColor = `${getColor}`;
  textSpan.textContent = `${getColor}`;
});
