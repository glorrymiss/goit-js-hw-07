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
  if (event.target.nodeName !== "IMG") {
    return;
  }
  event.preventDefault();

  //   === створила змінну для лінку фото
  const linkImage = event.target.dataset.source;
  console.log(linkImage);
  //  === закриття по escape;
  const heanderEscapeClose = (event) => {
    if (event.code === "Escape") {
      instance.close();
    }
  };
  // === додала модальний показ з бібліотеки
  const instance = basicLightbox.create(
    `<img src="${linkImage}" width="800" height="600">`,
    {
      onShow: (instance) => {
        if (basicLightbox.visible()) {
          window.addEventListener("keydown", heanderEscapeClose);
        }
      },

      onClose: (instance) => {
        window.removeEventListener("keydown", heanderEscapeClose);
      },
    }
  );
  instance.show();
}
