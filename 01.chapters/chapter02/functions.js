function sayHi() {
  return " Hey Hi ";
}

function greeting(name) {
  return `hi ${name} Nice to meet you!`;
}

function add(a, b) {
  let sum = a + b;
  return sum;
}

// console.log(add(5,6))

function sub(a, b) {
  let result = a - b;
  return result;
}

function multiply(a, b) {
  return (result = a * b);
}

function add(x, y) {
  return x + y;
}

console.log(add(2, 5));
// changing function name
const me = add;

me(3, 3);
console.log(me(3, 3));

const you = add;

you(5, 5);
console.log(you(2, 2));

function volPizza(radius, height) {
  let result = radius ** 2 * height * Math.PI;

  return result;
}

console.log(volPizza(7, 2));

/* """""""""""""""" Genrating uid """""""""""""""" */

function randomStr(len, id) {
  var ans = "";
  for (var i = len; i > 0; i--) {
    ans += id[Math.floor(Math.random() * id.length)];
  }
  return ans;
}

function newId() {
  let partten = "abcdefghijklmnopqrstwxyz1234567890";
  let uid = randomStr(20, partten);

  return uid;
}

console.log(newId());
