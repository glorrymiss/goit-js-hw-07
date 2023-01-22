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
          src="${original}"
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
  if (event.target.classList.contain("gallery__link")) {
    event.target.stopPropagation();
  }
  console.log(event.target);
}

// galleryItems.map((item) => {
//   const { original, preview } = item;
//   console.log(preview);
//   const galleryItem = document.createElement("div");
//   galleryItem.setAttribute("class", "gallery__item");
//   const galleryLink = document.createElement("a");
//   galleryLink.setAttribute("class", "gallery__link");
//   galleryLink.setAttribute("href", preview);
//   galleryItem.appendChild(galleryLink);
//   const galleryImage = document.createElement("img");
//   galleryImage.setAttribute("class", "gallery__image");
//   galleryImage.setAttribute("src", "small-image.jpg");
//   galleryImage.setAttribute("data-source", original);
//   galleryImage.setAttribute("alt", "Image description");
//   galleryLink.appendChild(galleryImage);
//   console.log(galleryItem);
//   return galleryItem;
// });
// boxGallery.append(...galleryEl);

//   event.currentTarget.onclick = () => {
//     basicLightbox
//       .create(
//         `
// 		<img width="1400" height="900" data-source=original>
// 	`
//       )
//       .show();
//   };
// }
