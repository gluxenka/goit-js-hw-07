function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const numberInput = document.querySelector("#controls input");
const createButton = document.querySelector("#controls [data-create]");
const destroyButton = document.querySelector("#controls [data-destroy]");
const boxesElement = document.querySelector("#boxes");

function createBoxes(amount) {
  const elements = [];

  for (let i = 0; i < amount; i++) {
    const size = 30 + 10 * i;
    const backgroundColor = getRandomHexColor();
    const newElement = document.createElement("div");
    newElement.setAttribute(
      "style",
      `background-color: ${backgroundColor}; width: ${size}px; height: ${size}px;`
    );
    elements.push(newElement);
  }

  boxesElement.append(...elements);
}

function destroyBoxes() {
  boxesElement.innerHTML = "";
}

createButton.addEventListener("click", () => {
  const numberAmount = parseInt(numberInput.value);
  if (numberAmount < 1 || numberAmount > 100 || isNaN(numberAmount)) {
    return;
  }
  destroyBoxes();
  createBoxes(numberAmount);
  numberInput.value = "";
});

destroyButton.addEventListener("click", () => {
  destroyBoxes();
});
