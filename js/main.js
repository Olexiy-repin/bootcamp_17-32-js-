'use strict';
/*
 * Ветвления if
 */

// if (условие) {
// тело if
// }

// const max = 10;

// if (2 < max) {
//   console.log('Done');
// } else {
//   console.log('Err');
// }

/*
? Дана строка, состоящая из символов, например, 'abcde'.
? Проверьте, что первым символом этой строки является буква 'a'.
? Если это так - выведите 'да', в противном случае выведите 'нет'.
*/
// const str = 'abcde';

// if (str.startsWith('a')) {
//   console.log('да');
// } else {
//   console.log('нет');
// }

/*
? Запросить у пользователя число, если число равно 10,
? то выведите 'Верно', иначе выведите 'Неверно'.
*/

// const number = Number.parseFloat(prompt('Введите число'));

// if (number === 10) {
//   console.log('Верно');
// } else {
//   console.log('Неверно');
// }

/*
? В переменной min лежит число от 0 до 59.
? Определите в какую четверть часа попадает это число (в первую, вторую, третью или четвертую).
? [0 до 15) - первая четверть часа
? [15 до 30) - вторая четверть часа
? [30 до 45) - третья четверть часа
? [45 до 60) - четвёртая четверть часа
*/

// const min = 40;

// if (min >= 0 && min < 15) {
//   console.log('первая четверть часа');
// } else if (min >= 15 && min < 30) {
//   console.log('вторая четверть часа');
// } else if (min >= 30 && min < 45) {
//   console.log('третья четверть часа');
// } else if (min >= 45 && min < 60) {
//   console.log('четвёртая четверть часа');
// } else {
//   console.log('никуда не попали');
// }

/*
? Напишите код, который будет спрашивать:
? 'Какое «официальное» название JavaScript?'
? Если пользователь вводит «ECMAScript»,
? то показать: «Верно!», в противном случае – отобразить: «Не знаете? ECMAScript!»
*/

// const userInput = prompt('Какое «официальное» название JavaScript?').toLowerCase();

// if (userInput === 'ecmascript') {
//   console.log('Верно!');
// } else {
//   console.log('Не знаете? ECMAScript!');
// }

/*
? Напишите код, который получает число через prompt, а затем выводит в console.log:
? 1, если значение больше нуля,
? -1, если значение меньше нуля,
? 0, если значение равно нулю.
? Предполагается, что пользователь вводит только числа.
*/

// const number = Number.parseFloat(prompt('Введите число'));

// if (number > 0) {
//   console.log(1);
// } else if (number < 0) {
//   console.log(-1);
// } else {
//   console.log(0);
// }

/*
 * Switch case
 */

// switch (значение) {
//   case значение:
//     инструкции;
//     break;

//   case значение:
//     инструкции;
//     break;

//   default:
//     инструкции;
// }

// const num = 20;

// switch (num) {
//   case 10: {
//     console.log('Число 10');
//     break;
//   }

//   case 5: {
//     console.log('Число 5');
//     break;
//   }

//   case 7: {
//     console.log('Число 7');
//     break;
//   }

//   default: {
//     console.log('default');
//   }
// }

/*
?  Перепишите код с использованием одной конструкции switch:
*/

// const number = Number.parseFloat(prompt('Введите число между 0 и 3', ''));

// switch (number) {
//   case 0: {
//     alert('Вы ввели число 0');
//     break;
//   }

//   case 1: {
//     alert('Вы ввели число 1');
//     break;
//   }

//   case 2:
//   case 3: {
//     alert('Вы ввели число 2, а может и 3');
//     break;
//   }

//   default: {
//     alert('Вы ввели какое-то другое число');
//   }
// }

// if (number === 0) {
//   alert('Вы ввели число 0');
// } else if (number === 1) {
//   alert('Вы ввели число 1');
// } else if (number === 2 || number === 3) {
//   alert('Вы ввели число 2, а может и 3');
// } else {
//   alert('Вы ввели какое-то другое число');
// }

/*
 * Тернарный оператор
 */

//<условие> ? <выражение_если_условие_истинно> : <выражение_если_условие_ложно>

/*
? Перепишите конструкцию if с использованием условного оператора '?':
*/
// const a = 2;
// const b = 1;
// let result = a + b < 4 ? 'Мало' : 'Много';

// if (a + b < 4) {
//   result = 'Мало';
// } else {
//   result = 'Много';
// }

// console.log(result);

/*
?  Перепишите if..else с использованием нескольких операторов '?'.
*/

// const login = 'Директор';
// let message =
//   login === 'Сотрудник'
//     ? 'Привет'
//     : login == 'Директор'
//     ? 'Здравствуйте'
//     : login == ''
//     ? 'Нет логина'
//     : '';

// if (login === 'Сотрудник') {
//   message = 'Привет';
// } else if (login == 'Директор') {
//   message = 'Здравствуйте';
// } else if (login == '') {
//   message = 'Нет логина';
// } else {
//   message = '';
// }

// console.log(message);