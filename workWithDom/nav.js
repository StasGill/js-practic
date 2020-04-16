//Подсветка элементов меню в зависимости от клика

const nav = document.querySelector(".js-navigationUl")

const handleNavClick = e => {
    e.preventDefault();
    
    if(e.target === e.currentTarget){                                                //Проверка чтобы не подсвечивался UL
        return
    }
    
    const activeLink = e.currentTarget.querySelector(".navigationLink--active")      //Поиск уже активного элемента
    
    if(activeLink){                                                                 //Снятия класса если есть активный элемент
        activeLink.classList.remove('navigationLink--active')
    }
    
    e.target.classList.add("navigationLink--active")                               //Активация класса по клику

    
}


nav.addEventListener('click',handleNavClick)



















// console.log(nav)