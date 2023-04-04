import "simplelightbox/dist/simple-lightbox.min.css";
import SimpleLightbox from "simplelightbox";
import { galleryItems } from './gallery-items';
const takeGallery = document.querySelector("ul.gallery");
const doNewGallery = galleryCreate(galleryItems);
takeGallery.insertAdjacentHTML("beforeend", doNewGallery);
function galleryCreate(images) {
    return images.map(({
        preview, original, description
    }) => {
        return `<a class="gallery__link" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}">
        </a>`;
    }).join("");
};
let lightBoxGallery = new SimpleLightbox(".gallery a", {
    captionDelay: 250,
    captionsData: "alt",
});
console.log(takeGallery);
console.log(galleryItems);