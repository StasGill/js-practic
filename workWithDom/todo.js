// Скрипт добавления заметок
const toDos = {                                             //Обьект где хранятся все заметки
items:[],
add(text){                                                 //Медот добавление элементов заметок в обьект
    const toDo = {
        id: Date.now(),
        text
    };
    
    this.items.push(toDo);
    
    return toDo;
},
delete(id){                                                     //Метод удаления заметок из обьекта
this.items = this.items.filter( item => item.id !== id)
}
}

const ref = {                                                  //Обьект с сылками на элементы дома
    editor : document.querySelector(".js-toDoAdd"),
    toDoList : document.querySelector(".js-toDoItems")
}


ref.editor.addEventListener('submit',handleEditorSubmit)          //Слушатель инпута
ref.toDoList.addEventListener('click',handleToDoLisiClick)        //Слушатель удаления заметки

function handleToDoLisiClick (e){                            //Метод удаление заметок
    if(e.target.nodeName !== 'BUTTON'){                      //Проверка на то что будет выбрана кнопка удаления
        return
    }
    const button = e.target;                                //Создаем ссылку на кнопку удаления
    const li = button.closest('li.toDoItem');
    const toDoId = Number(li.dataset.id);                  //Ссылка на Айди лишки
    toDos.delete(toDoId);                                  //Вызываем метод удаление из обьекта заметок по Айди
    // console.log(toDos.items);
    // ref.toDoList.removeChild(li);
    li.remove();                                           //Удаляем из дома лишку
}

function handleEditorSubmit(e){                             //Метод добавление заметок в обьект заметок
e.preventDefault();
const form = e.currentTarget;                              //Ссылка на форму
const inputValue = form.elements.text.value;               //Ссылка на значение введеного инпута Text взяли из Name Input
const toDo = toDos.add(inputValue);                        //Вызвали метод добавления элемта в обьект всех заметок
const toDomarkUp = buildToDoItem(toDo);                    //Вызвали функцию по созданию шаблона Лишки и передали результат метода ToDO
appendToDoItem(ref.toDoList, toDomarkUp);                  //Вставили шаблон в нашу Улку
form.reset();                                              //Удаляет данные из инпута

}

function buildToDoItem(item){                             //Функция с шаблоном разметки
return `<li class="toDoItem" data-id="${item.id}">
<div>
    <p class='toDosText'>
      ${item.text}
    </p>
    <div>
        <button class="toDoItemBtm">Delete</button>
    </div>
</div>
</li>`
}

function appendToDoItem(parentRef, todoEl){                //Функция для внедрения нашей заметки в дом
    parentRef.insertAdjacentHTML('beforeend', todoEl)
}