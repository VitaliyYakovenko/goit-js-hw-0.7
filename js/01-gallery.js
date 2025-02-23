import { galleryItems } from './gallery-items.js';
const listEl = document.querySelector(".gallery");

listEl.addEventListener("click", onGetImg);

const markup = createMarkup(galleryItems);
listEl.innerHTML = markup;

function createMarkup(data) {
    return data.map(({ preview, original, description }) => {
    return  `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
   </li>`}).join("");
};


function onGetImg(e) {
    e.preventDefault();
    if (e.target.nodeName !== "IMG") {
        return;
    }
    const img = e.target.dataset.source;

    const lightbox = basicLightbox.create(`
    <img src="${img}" width="500" height="300">`)
    lightbox.show(); 
    window.addEventListener("keydown",(event) => onCloseModalByEscape(event, lightbox));
}



function onCloseModalByEscape(e, lightbox) {
    if (e.code === "Escape") {
        lightbox.close();
        window.removeEventListener("keydown", onCloseModalByEscape);
    } 
};