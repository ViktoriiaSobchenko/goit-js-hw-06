const input = document.getElementById("validation-input");
const inputLength = Number(input.dataset.length);

input.addEventListener("blur", (event) => {
  input.classList.add("invalid");
  if (event.currentTarget.value.trim().length === inputLength) {
    input.classList.replace("invalid", "valid");
  }
});
