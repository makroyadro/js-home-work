// Задание 1:

const element = document.createElement('div');

document.body.appendChild(element);
element.textContent = 'Этот элемент создан при помощи DOM API';

// Задание 2:

const element2 = document.createElement('div');
element2.classList.add('inner');
element2.textContent = 'Этот элемент тоже создан при помощи DOM API';

element.appendChild(element2);

// Задание 3:

element2.style.color = 'red';

// Задание 4:

element.addEventListener('click', function() {
  console.log( 'Этот текст говорит о том, что я всё сделал правильно');
});

// Задание 5:

const link = document.createElement('a');
link.textContent = 'LINK';
link.setAttribute('href', 'https://loftschool.com');

document.body.appendChild(link);

link.addEventListener('click', function(event) {
  event.preventDefault();
  console.log('Я кликнул на ссылку ' + link.getAttribute('href'));
});

/////
const breakline = document.createElement('br');
document.body.appendChild(breakline);
/////

// Задание 6:

const input = document.createElement('input');
const button = document.createElement('button');

document.body.appendChild(input);

button.textContent = 'кнопка';    
document.body.appendChild(button);

button.addEventListener('click', function(event) {
  event.preventDefault();
  console.log(input.value);
});