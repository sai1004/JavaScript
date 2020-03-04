/* !!!!!!!!!!!!!!!!! Using Array Destructuring to swap values !!!!!!!!!!!!!!!!! */

// let a = "world";
// let b = "hello";

// [a, b] = [b, a];

// console.log(a);
// console.log(b);

/* """""""""""""""""" Debugging """""""""""""""""" */
const a = 5;
const b = 6;
const c = 7;
console.log({ a, b, c });

/* """""""""""""""""" concating  """""""""""""""""" */

var d = ["a", "b", "c", "d", "e", "f"];
var e = ["g", "h", "i", "j", "k", "l"];

d.shift();
e.pop();
d.includes("a");

var f = [].concat(d, e); // new way of concating
var g = [...d, ...e];
console.log(f);

var myVar = {};

console.log(typeof myVar);

var arrr = [1, 2];

console.log(Math.round(3.2));

/* """""""""""""""""" Shuffling array’s elements  """""""""""""""""" */

var list = [1, 2, 3];
console.log(
  list.sort(function() {
    return Math.random() - 0.5;
  })
); // [2,1,3]

/* """""""""""""""""""""""""""""""""""""""""""""""""""""""""""" */

// if (!Object.prototype.filter) {
//   function filter(predicate) {
//     const obj = this;
//     if (!obj.__proto__ || obj.__proto__.constructor.name !== "Object") {
//       throw new Error(
//         "Connot invoke the filter method: the input is not an Object."
//       );
//     }
//     const newObj = {};
//     for (let prop in obj) {
//       if (obj.hasOwnProperty(prop) && predicate(obj[prop], prop, obj)) {
//         newObj[prop] = obj[prop];
//       }
//     }
//     return newObj;
//   }
//   Object.defineProperty(Object.prototype, 'filter', {
//     value: filter,
//     writable: true,
//     configurable: true
//   })
// }
