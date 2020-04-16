const about = document.querySelector(".js-aboutItems")

const handleAboutClick = e => {
    e.preventDefault();
    const element = e.target
    if(e.target === e.currentTarget){                                                //Проверка чтобы не подсвечивался UL
        return
    }
    element.classList.toggle("aboutItem--active")   
}

about.addEventListener('click',handleAboutClick)