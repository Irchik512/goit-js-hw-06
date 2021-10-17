const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
function addItems(arr) {
  const list = document.querySelector("#ingredients");
  const liItems = [];
  arr.forEach((element) => {
    const liItem = document.createElement("li");
    liItem.classList.add("item");
    liItem.textContent = `${element}`;
    liItems.push(liItem);
  });
  list.append(...liItems);
  return;
}

addItems(ingredients);
