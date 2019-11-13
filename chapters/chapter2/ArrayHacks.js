// https://hackernoon.com/javascript-hacks-for-es6-hipsters-67d633ce8ace

// Using Array Destructuring to swap values

let a = "world";
let b = "hello";

[a, b] = [b, a];

console.log(a);
console.log(b);


// Array Destructuring is great. Combined with async/await and promises to make a complex flow — simple.

async function () {


const [user , account ] = await Promise.all([
    fetch('/user'),
    fetch('/account')
])

}
