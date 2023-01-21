import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const boxGallery = document.querySelector(".gallery");

const galleryEl = galleryItems.map((item) => {
  const { description, original, preview } = item;
  console.log(preview);
  const galleryItem = document.createElement("div");
  galleryItem.setAttribute("class", "gallery__item");
  const galleryLink = document.createElement("a");
  galleryLink.setAttribute("class", "gallery__link");
  galleryLink.setAttribute("href", preview);
  galleryItem.appendChild(galleryLink);
  const galleryImage = document.createElement("img");
  galleryImage.setAttribute("class", "gallery__image");
  galleryImage.setAttribute("src", "small-image.jpg");
  galleryImage.setAttribute("data-source", original);
  galleryImage.setAttribute("alt", description);
  galleryLink.appendChild(galleryImage);
  return galleryItem;
});
boxGallery.append(...galleryEl);
