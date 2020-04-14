// Задание 1
// Напиши функцию-конструктор Account, которая создает объект со свойствами login и email. 
//В prototype функции-конструктора добавь метод getInfo(), который выводит в консоль значения полей login и email объекта который его вызвал.

// const Account = function({login,email}){
//     this.email=email
//     this.login=login
// }

// Account.prototype.getInfo = function(){
//     console.log(`Login: ${this.login}, Email: ${this.email}`)
// };




// console.log(Account.prototype.getInfo); // function

// const mango = new Account({
//   login: 'Mangozedog',
//   email: 'mango@dog.woof',
// });

// mango.getInfo(); // Login: Mangozedog, Email: mango@dog.woof

// const poly = new Account({
//   login: 'Poly',
//   email: 'poly@mail.com',
// });

// poly.getInfo(); // Login: Poly, Email: poly@mail.com

//------------------------------------------------------------------------------------------------------------------------------------------------

// Задание 2
// Напиши класс User для создания пользователя со следующим свойствами:

// name - строка
// age - число
// followers - число
// Добавь метод getInfo(), который, выводит строку: User ${имя} is ${возраст} years old and has ${кол-во фоловеров} followers

// const User = function({name,age,followers}){
//     this.name=name
//     this.age=age
//     this.followers=followers
// }

// User.prototype.getInfo = function(){
//     console.log(`User ${this.name} is ${this.age} years old and has ${this.followers} followers`)
// };

// const mango = new User({
//   name: 'Mango',
//   age: 2,
//   followers: 20,
// });

// mango.getInfo(); // User Mango is 2 years old and has 20 followers

// const poly = new User({
//   name: 'Poly',
//   age: 3,
//   followers: 17,
// });

// poly.getInfo(); // User Poly is 3 years old and has 17 followers

//------------------------------------------------------------------------------------------------------------------------------------------------

// Задание 3
// Напиши класс Storage, который будет создавать объекты для управления складом товаров.
// При вызове будет получать один аргумент - начальный массив товаров, и записывать его в свойство items.

// class Storage {
   
//     constructor(array) {
//         this.array = array;
//         }
    
//     getItems() { console.log(this.array)}
//     addItem(item){this.array.push(item); console.log(this.array)}
//     removeItem(item){
//         for(let key of this.array){
//             if (key === item) { this.array.splice(this.array.indexOf(key), 1);  }
//         }
//         console.log(this.array)
//     }
// }

// const storage = new Storage(['Нанитоиды','Пролонгер','Железные жупи','Антигравитатор']);


// // Добавь методы класса:

// storage.getItems()              //возвращает массив текущих товаров
// storage.addItem("Жупоид")       //получает новый товар и добавляет его к текущим
// storage.removeItem('Пролонгер')   // получет товар и, если он есть, удаляет его из текущих

//------------------------------------------------------------------------------------------------------------------------------------------------

// Задание 4
// Напиши класс StringBuilder. На вход он получает один параметр - строку, которую записывает в свойство _value.

// class StringBuilder{
//     constructor(string){ this._string=string;}
//     get string(){ return this._string; } 
//     set string(value) { return this._string = value;} 
    
//     append(str){
//         this._string = this._string + str
//         return this._string
//     }
//     prepend(str){
//         this._string = str + this.string
//         return this._string
//     }
//     pad(str){
//         this._string = str + this.string + str
//         return this._string
//     }
// };
// Добавь классу следующий функционал:

// Геттер value - возвращает текущее значение поля _value
// Метод append(str) - получает парметр str (строку) и добавляет ее в конец _value
// Метод prepend(str) - получает парметр str (строку) и добавляет ее в начало value
// Метод pad(str) - получает парметр str (строку) и добавляет ее в начало и в конец _value
// const builder = new StringBuilder('.');

// builder.append('^');
// console.log(builder._string); // '.^'

// builder.prepend('^');
// console.log(builder._string); // '^.^'

// builder.pad('=');
// console.log(builder._string); // '=^.^='

//------------------------------------------------------------------------------------------------------------------------------------------------



