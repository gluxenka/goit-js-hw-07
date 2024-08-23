function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.body;
const changeColorBtn = document.querySelector("button.change-color");
const currentColorElement = document.querySelector("span.color");

changeColorBtn.addEventListener("click", () => {
  // colorElement.
  const newColor = getRandomHexColor();
  body.setAttribute("style", `background-color: ${newColor};`);
  currentColorElement.textContent = newColor;
});
