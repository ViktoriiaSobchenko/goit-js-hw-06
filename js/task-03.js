const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const makeGalleryEl = (item) => {
  const { url, alt } = item;

  return `<li class="item"> <img src="${url}" alt="${alt}" class="image" width="380" height="280"></li>`;
};

const ulEl = document.querySelector(".gallery");
const makeGalleryElRows = images.map(makeGalleryEl).join(" ");
ulEl.insertAdjacentHTML("beforeend", makeGalleryElRows);
