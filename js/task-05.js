function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const colorText = document.querySelector(".widget .color");
const changeColorButton = document.querySelector(".widget .change-color");

changeColorButton.addEventListener("click", () => {
  const newColor = getRandomHexColor();
  colorText.textContent = newColor;
  document.body.setAttribute("style", `background-color: ${newColor};`);
});
