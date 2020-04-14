const form = document.querySelector('.js-register-form')              //Создали ссылку на нашу форму



form.addEventListener('submit', handleSubmitWithFormData)            //Вещаем слушателя на форму

//=========================Первый метод(устарелый)==============

function handleSubmit(event){                                          //Функция для обработки формы
    
    event.preventDefault();                                           //Предотвращает перезагрузку формы

    const{elements} = event.currentTarget

    const inputName = elements.name
    const inputEmail = elements.email
    const inputPassword = elements.password
    const subscription = elements.subscription.value

    const data = {
        [inputName.name] : inputName.value,
        [inputEmail.name] : inputEmail.value,
        [inputPassword.name] : inputPassword.value,
        subscription
    }
}

//======================Второй метод через конструктор FormData====

function handleSubmitWithFormData(event){
    
    event.preventDefault();
    
    const formData = new FormData(event.currentTarget);               //Передаем в конструктор нашу форму
   
    const data = {};

    formData.forEach((value,name) => {
       
        data[name]=value
    
    })
console.log(data.name)
// console.log(checkFormData(data))
modalInf.insertAdjacentHTML('afterbegin',checkFormData(data))
}


//=====================Модальное окно=============================

const openModalBtn = document.querySelector('button[data-action="open-modal"]')
const closeModalBtn = document.querySelector('button[data-action="close-modal"]')
const backDrop = document.querySelector('.js-backDrop')
const modalInf = document.querySelector('.modal')




openModalBtn.addEventListener('click',openModal)
closeModalBtn.addEventListener('click',closeModal)
backDrop.addEventListener('click',handleBackDropClick)

function openModal(){                                     //Открытие по кнопке
  document.body.classList.add('show-modal')  
  window.addEventListener('keydown', handlePressKey)            
}
function closeModal(){                                    //Закрытие по кнопке
    document.body.classList.remove('show-modal')
    window.addEventListener('keydown', handlePressKey)    
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

//===================Шаблон с информацией из формы в модальном окне============

function checkFormData(arr){
const table = `<h1>Youre form data</h1>
<ul>
<li>Name:${arr.name}</li>
<li>E-mail:${arr.email}</li>
<li>Password:${arr.password}</li>
<li>Subscription:${arr.subscription}</li>

</ul>
`
return table
}

