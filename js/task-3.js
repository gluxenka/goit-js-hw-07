const inputElement = document.querySelector("#name-input");
const outputElement = document.querySelector("#name-output");

inputElement.addEventListener("input", () => {
  outputElement.textContent = inputElement.value.trim() || "Anonymous";
});
