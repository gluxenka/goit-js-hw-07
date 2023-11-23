const inputElement = document.querySelector("#name-input");
const outputElement = document.querySelector("#name-output");

inputElement.addEventListener("input", () => {
  const inputValue = inputElement.value.trim();
  inputElement.value = inputValue;

  if (inputValue === "") {
    outputElement.textContent = "Anonymous";
  } else {
    outputElement.textContent = inputValue;
  }
});
