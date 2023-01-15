const categoriesItem = document.querySelectorAll(".item");
console.log("Number of categories:", categoriesItem.length);

categoriesItem.forEach((category) => {
  console.log("Category:", category.firstElementChild.textContent);
  console.log("Elements:", category.querySelectorAll("li").length);
});
