import { galleryItems } from './gallery-items.js';
const listEl = document.querySelector(".gallery");

listEl.innerHTML = createMarkup(galleryItems); 
listEl.addEventListener("click", onGetModalImg);


function createMarkup(data) {
    return data.map(({ preview, original, description }) => {
    return    `
        <li class="gallery__item">
           <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}"/>
          </a>
      </li>
        `}).join("");

};

function onGetModalImg(e) {
    e.preventDefault();
};


  const lightbox = new SimpleLightbox('.gallery a',  {            
      captionsData: "alt",
      captionDelay: 250,
      widthRatio: 0.9,
      heightRatio: 0.75,
    });

