// v.1
// const left = document.querySelector('#left');
// const right = document.querySelector('#right');
// const items = document.querySelector('#items');

// const minRight = 0;
// const maxRight = 500;
// const step = 100;
// let currentRight = 0;

// items.style.right = currentRight + 'px';

// right.addEventListener('click', function() {
//   event.preventDefault();

//   if (currentRight < maxRight) {
//     currentRight += step;
//     items.style.right = currentRight + 'px';
//   }
// });

// left.addEventListener('click', function() {
//   event.preventDefault();

//   if (currentRight > minRight) {
//     currentRight -= step;
//     items.style.right = currentRight + 'px';
//   }
// });

// v.2

const left = document.querySelector('#left');
const right = document.querySelector('#right');
const items = document.querySelector('#items');

const minRight = 0;
const maxRight = 600;
const step = 100;
let currentRight = 0;

items.style.right = currentRight + 'px';

right.addEventListener('click', function() {
  event.preventDefault();

  if (currentRight < maxRight) {
    currentRight += step;
    items.style.right = currentRight + 'px';
  }
  
  if (currentRight == maxRight) {
    currentRight = 0;
    items.style.right = currentRight;
  }
});

left.addEventListener('click', function() {
  event.preventDefault();

  if (currentRight >= minRight) {
    currentRight -= step;
    items.style.right = currentRight + 'px';
  }

  if (currentRight < minRight) {
    currentRight = maxRight - step;
    items.style.right = currentRight + 'px';
  }
});