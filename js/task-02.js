const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ulRef = document.getElementById("ingredients");

const items = ingredients.map((ingredient) => {
  const liRef = document.createElement("li");
  liRef.classList.add("item");
  liRef.textContent = ingredient;
  return liRef;
});

ulRef.append(...items);
