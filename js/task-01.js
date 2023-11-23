const categoriesItems = document.querySelectorAll("li.item");

console.log(`Number of categories: ${categoriesItems.length}`);

categoriesItems.forEach((categoryItem) => {
  const headerElement = categoryItem.querySelector("h2");
  const categoryElements = categoryItem.querySelectorAll("li");

  console.log(`Category: ${headerElement.textContent}`);
  console.log(`Elements: ${categoryElements.length}`);
});
