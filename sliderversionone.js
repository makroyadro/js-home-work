// v.1
// const left = document.querySelector("#left");
// const right = document.querySelector("#right");
// const items = document.querySelector("#items");

// var styleRight = items.getAttribute(right);

// items.style.right = '0';

// right.addEventListener("click", function (event) {

//   event.preventDefault();

//   if (styleRight < 500) {

//     styleRight = styleRight + 100;

//     items.style.right = styleRight + 'px';

//   }

// });

// left.addEventListener("click", function (event) {

//   event.preventDefault();

//   if (styleRight > 0) {

//     styleRight = styleRight - 100;

//     items.style.right = styleRight + 'px';

//   }

// });

// v.2
const left = document.querySelector("#left");
const right = document.querySelector("#right");
const items = document.querySelector("#items");

var styleRight = items.getAttribute(right);

items.style.right = '0';

right.addEventListener("click", function (event) {

  event.preventDefault();

  if (styleRight <= 500) {

    styleRight = styleRight + 100;

    items.style.right = styleRight + 'px';

  }

  if (styleRight == 600) {

    styleRight = 0;

    items.style.right = styleRight + 'px';

  }

});

left.addEventListener("click", function (event) {

  event.preventDefault();

  if (styleRight >= 0) {

    styleRight = styleRight - 100;

    items.style.right = styleRight + 'px';

  }

  if (styleRight == -100) {

    styleRight = 500;

    items.style.right = styleRight + 'px';

  }

});