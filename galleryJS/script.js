
import gallery from "./data.js";



const ref = {                                                  //Обьект с сылками на элементы дома lightbox__image
    ulItems : document.querySelector(".js-gallery"),
    modal : document.querySelector(".js-lightbox"),
    modalClose: document.querySelector(".lightbox__button"),
    backDrope: document.querySelector(".lightbox__content"),
    modalImg: document.querySelector(".lightbox__image"),
}

ref.ulItems.addEventListener('click',openModal)
ref.modalClose.addEventListener('click',closeModal)
ref.backDrope.addEventListener('click',handleBackDropClick)

function openModal(e){                                     //Открытие по кнопке
    e.preventDefault();
    
    ref.modalImg.src = e.target.dataset.source
    ref.modal.classList.add('is-open')  
    window.addEventListener('keydown', handlePressKey)            
}

function closeModal(){                                    //Закрытие по кнопке
    ref.modal.classList.remove('is-open') 
    ref.modalImg.src = '' 
        }

function handleBackDropClick(event){                      //Закрытие по бекдропу
    if(event.target !== event.currentTarget){             //Проверка на каррент таргет
        return
    }
   closeModal()
}

function handlePressKey(event){
    
    if(event.code !== 'Escape'){
        return
    }
    
    closeModal()

}


function buildItem(item){                                                                     //Функция с шаблоном разметки
    return `<li class="gallery__item">
    <a
      class="gallery__link"
      href="${item.original}"
    >
      <img
        class="gallery__image"
        src="${item.preview}"
        data-source="${item.original}"
        alt="${item.description}"
      />
    </a>
  </li>`
    }


gallery.forEach(item => ref.ulItems.insertAdjacentHTML('beforeend',buildItem(item)))

