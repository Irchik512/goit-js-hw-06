const listCategories = document.querySelector("#categories");
const categories = [...listCategories.children];
console.log("Number of categories: " + categories.length);
// function logItem(arr) {
//   let element;
//   for (element of arr) {
//     console.log("Category: " + element.firstElementChild.textContent);
//     console.log("Elements: " + element.lastElementChild.children.length);
//   }
//   return;
// }
// logItem(categories);

categories.forEach((liEll) => {
  console.log("Category:" + liEll.firstElementChild.textContent);
  console.log("Elements:" + liEll.lastElementChild.children.length);
  return;
});
