// v.1

// const left = document.querySelector("#left");
// const right = document.querySelector("#right");
// const items = document.querySelector("#items");

// const computed = getComputedStyle(items);

// right.addEventListener("click", function(event) {
//   event.preventDefault();

//   let currentRight = parseInt(computed.right);

//   if (!currentRight) {
//     currentRight = 0;
//   }

//   if (currentRight < 500) {
//     items.style.right = currentRight + 100 + 'px';
//   }
  
// });

// left.addEventListener("click", function(event) {
//   event.preventDefault();

//   let currentRight = parseInt(computed.right);

//   if (!currentRight) {
//     currentRight = 0;
//   }

//   if (currentRight > 0) {
//     items.style.right = currentRight - 100 + 'px';
//   }
  
// });


// v.2

const left = document.querySelector("#left");
const right = document.querySelector("#right");
const items = document.querySelector("#items");

const computed = getComputedStyle(items);

right.addEventListener("click", function(event) {
  event.preventDefault();

  let currentRight = parseInt(computed.right);

  if (!currentRight) {
    currentRight = 0;
  }

  if (currentRight <= 500) {
    items.style.right = currentRight + 100 + 'px';
  }

  if (currentRight == 500) {
    items.style.right = 0;
  }
  
});

left.addEventListener("click", function(event) {
  event.preventDefault();

  let currentRight = parseInt(computed.right);

  if (!currentRight) {
    currentRight = 0;
  }

  if (currentRight >= 0) {
    items.style.right = currentRight - 100 + 'px';
  }
  
  if (currentRight == 0) {
    items.style.right = 500 + 'px';
  }

});
