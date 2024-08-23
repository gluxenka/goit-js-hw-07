const listContainer = document.querySelector(`#categories`);
const listItems = listContainer.querySelectorAll(`li.item`);

console.log(`Number of categories: ${listItems.length}`);

listItems.forEach((listItem) => {
  const hedding = listItem.querySelector(`h2`);
  console.log(`Category: ${hedding.textContent}`);
  const categoryItems = listItem.querySelectorAll(`li`);
  console.log(`Elements: ${categoryItems.length}`);
});
