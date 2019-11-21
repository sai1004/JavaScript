// https://hackernoon.com/javascript-hacks-for-es6-hipsters-67d633ce8ace

// Using Array Destructuring to swap values

// let a = "world";
// let b = "hello";

// [a, b] = [b, a];

// console.log(a);
// console.log(b);

// Debugging
const a = 5;
const b = 6;
const c = 7;
console.log({ a, b, c });

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
