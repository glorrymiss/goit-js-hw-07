import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);
const gallery = document.querySelector(".gallery");
const allElements = createGalleryImages(galleryItems);
function createGalleryImages(galleryItems) {
  const item = galleryItems
    .map(({ description, original, preview }) => {
      return `
     <li class ="gallery__item">
    <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
    </li>
    `;
    })
    .join("");
  console.log(item);
  return item;
}
gallery.insertAdjacentHTML("afterbegin", allElements);

gallery.addEventListener("click", heandleClickImage);
// ====== підключення SimpleLightbox
function heandleClickImage(event) {
  event.preventDefault();

  new SimpleLightbox(".gallery a", {
    // === затримка і виведення опису зображення
    captionData: "alt",
    captionDelay: 250,
  });
}
console.log(gallery);
