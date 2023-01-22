import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const boxGallery = document.querySelector(".gallery");
const allCreatedElements = createGalleryElements(galleryItems);
boxGallery.insertAdjacentHTML("afterbegin", allCreatedElements);
function createGalleryElements(galleryItems) {
  const element = galleryItems
    .map(({ description, original, preview }) => {
      return `
    <div class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </div>
   `;
    })
    .join("");
  console.log(element);
  return element;
}

boxGallery.addEventListener("click", heandleClickOnImage);

function heandleClickOnImage(event) {
  event.preventDefault();
  const linkImages = event.target.getAttribute("data-source");
  const allImagesShow = basicLightbox.create(`
    <img src="${linkImages}" width="800" height="600">
`);

  allImagesShow.show();
}
