import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css"

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
console.log(SimpleLightbox)
const gallery = document.querySelector('.gallery')



function creatCard(arr) {
    return arr.map(({ preview, original, description }) => 
        `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`
    ).join('')
}

gallery.insertAdjacentHTML('beforeend', creatCard(galleryItems))

gallery.addEventListener('click', handleCardClick)


let currentLightboxInstance = null;

function handleCardClick(evt) {
  evt.preventDefault();

  if (evt.target === evt.currentTarget) {
    return
  }
    
   
  const currentCard = evt.target.dataset.source;
  console.log(currentCard)
  if (currentLightboxInstance) {
    currentLightboxInstance.close()
  }
  currentLightboxInstance = basicLightbox.create(`<img src="${currentCard}" />`,
    {
      onShow: () => (window.addEventListener('keydown', onEscPress)),
      
      onClose: () => {
        window.removeEventListener('keydown', onEscPress);
        currentLightboxInstance = null
      
      }
    }
  )
  
  currentLightboxInstance.show()

   
  function onEscPress(evt) {
    if (evt.code === 'Escape') { currentLightboxInstance.close() }
        
    console.log(evt)
  }
}


console.log(galleryItems);
