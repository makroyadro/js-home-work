// Типы данных и переменные

var name = 'Дмитрий';
console.log(name);
var name = 'Евгений';
console.log(name);

console.log('-----------------');

// Условный оператор if

if ( 8 > 9) {
  console.log('Верно');
} else {
  console.log('Неверно');
}

console.log('-----------------');

// Циклический оператор for:

for (i = 0; i < 10; i++) {
  console.log(i);
}

console.log('-----------------');

// Функции:

function sum(p1,p2,p3) {
  let result = p1 + p2 + p3;
  return result;
}

result = sum(10,20,30);
console.log(result);

result = sum(1,10,100);
console.log(result);

console.log('-----------------');

// Массивы и объекты:

// Задание 1:

var  learn = ['привет', 'loftschool'];

learn.push('я изучаю');
learn.push('javascript');

console.log(learn.length);

for (i = 0; i < 4; i++) {
  console.log(learn[i]);
}

console.log('-----------------');

// Задание 2

var numbers = [1, 20, 30, 100, 110, 200, 25, 300, 500, 2];

for ( i = 0; i < 10; i++) {

  if (numbers[i] > 100) {
    console.log(numbers[i]);
  }

}

console.log('-----------------');

// Задание 3 

var person = {
  name: 'Дмитрий',
  lastName: 'Косьянов',
  age: 22
};

console.log(person.name);
console.log(person.lastName);
console.log(person.age);

person.hobby = 'Gaming';

console.log(person.hobby);

console.log('-----------------');

// Задание 4

function hello(human) {
  let result = 'Привет, меня зовут ' + person.name + ' ' + person.lastName + ' и мне ' + person.age + ' лет!';
  return result;
}

helloLine = hello(person);
console.log(helloLine);