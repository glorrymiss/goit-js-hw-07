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
boxGallery.addEventListener("click", hendleClickOnImage);
function hendleClickOnImage(event) {
  if (event.target.nodeName !== "IMG") {
    return;
  }
  event.preventDefault();

  //   === створила змінну для лінку фото
  const linkImage = event.target.dataset.source;
  console.log(linkImage);

  // === додала модальний показ з бібліотеки
  const instance = basicLightbox.create(
    `<img src="${linkImage}" width="800" height="600">`,
    {
      hendler: null,
      onShow: (instance) => {
        this.hendler = onEscapeClose.bind(instance);
        window.addEventListener("keydown", this.hendler);
      },

      onClose: () => {
        window.removeEventListener("keydown", this.hendler);
      },
    }
  );
  instance.show();
  // closePictureButtonEsc(instance);
}

//  === закриття по escape;
function onEscapeClose(event) {
  if (event.code === "Escape") {
    this.close();
  }
}
// === функція закриття модальної вікна за допомогою escape;
// function closePictureButtonEsc(instance) {
//   window.addEventListener(
//     "keydown",
//     (event) => {
//       if (event.code !== "Escape") {
//         return;
//       } else if (!basicLightbox.visible()) {
//         return;
//       } else {
//         instance.close();
//       }
//     },
//     { once: true }
//   );
// }
