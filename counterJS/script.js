'use strict';

const Counter = function({initialValue = 0, step = 1}){                           // Функция конструктор
this.value = initialValue
this.step = step
}

Counter.prototype.increment = function(){                                         //Добавляем методы в прото функции конструктора
    this.value +=this.step
}

Counter.prototype.dicrement = function(){                                         //Добавляем методы в прото функции конструктора
    this.value -=this.step
}

const counter = new Counter({initialValue : 1, step : 1})                         // Создаем экземпляр функции конструктора
counter.increment()
counter.increment()



const incrementBtn = document.querySelector('button[data-action="increment"]')   //Находим кнопки в доме
const dicrementBtn = document.querySelector('button[data-action="dicrement"]')
const counterValuefield = document.querySelector('.jsOutput')

const updateCounterField = function(){                                           //Привязка данных к значению экземпляр функции конструктора
    counterValuefield.textContent = counter.value
}

incrementBtn.addEventListener('click',()=>{                                      //Вешаем слушателя событий на кнопку
    counter.increment()                                                          //Вызываем метод экземпляра функции конструктора
    updateCounterField()
    })

dicrementBtn.addEventListener('click',()=>{
    counter.dicrement()
    updateCounterField()
    })

