const images = [
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg",
    description: "Hokkaido Flower",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",
    description: "Container Haulage Freight",
  },
  // ... додайте інші об'єкти з вашого масиву
];

const galleryContainer = document.querySelector(".gallery");

const galleryMarkup = images
  .map(({ preview, original, description }) => {
    return `
      <li class="gallery-item">
        <a class="gallery-link" href="${original}">
          <img
            class="gallery-image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </li>
    `;
  })
  .join("");

galleryContainer.innerHTML = galleryMarkup;

galleryContainer.addEventListener("click", onGalleryItemClick);

function onGalleryItemClick(event) {
  event.preventDefault();

  const isImage = event.target.classList.contains("gallery-image");

  if (!isImage) {
    return;
  }

  const largeImageURL = event.target.dataset.source;
  const imageAlt = event.target.alt;

  const instance = basicLightbox.create(`
    <img src="${largeImageURL}" alt="${imageAlt}">
  `);

  instance.show();
}
