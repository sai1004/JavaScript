var a = 10;

var b = 20;

var c = 10;

//  """"""""""""" Arithmetic Oprator """""""""""""""
//   Operators: + ,- ,*, / ,~~, **, %

console.log(a + b);
console.log(a - b);
console.log(b - c);
console.log(c * b * a);

console.log(((a * b) / 2) * 253);

console.log(10 / 5);

console.log(5 / 2);

console.log(5 % 2);

console.log(5 ** 3);

/* """"""""""""""" comparision oprator """""""""""""""""" */

console.log(a == b);

console.log(b > a);

console.log(c < a);

console.log(b <= a);

console.log(a >= c);

console.log(a != c);

/* """"""""""""""" Assignment oprator """"""""""""""" */

//  =, +=, -=, *=, /=, %=, ~~=, **=

console.log((c += b)); // similar to c = c + b

console.log((b -= a));

console.log((a *= b));


// let counter = 2;
// counter++; // works the same as counter = counter + 1, but is shorter
// alert( counter ); // 3

// let counter = 2;
// counter--; // works the same as counter = counter - 1, but is shorter
// alert( counter ); // 1

/* """"""""""""""" Type Operators """"""""""""""" */

var Bike = { make: "Honda", model: "CLIQ", year: 2018 };

/* """"""""""""""" in operator """"""""""""""" */

console.log("make" in Bike); //
// Output:
// true

/* """"""""""""""" of Operator """"""""""""""" */

colors = ["red", "green", "blue", "yellow"];

for (color of colors) {
  console.log("-->", color);
}

/* """"""""""""""" delete """"""""""""""" */

var Bike = { Company1: "Honda", Company2: "Hero", Company3: "Royal Enfield" };
delete Bike.Company1;
console.log(Bike); //
// Output:
// { Company2: 'Hero', Company3: 'Royal Enfield' }

/* """"""""""""""" typeof """"""""""""""" */

let message = "Welcome to " + "JavaTpoint";
console.log(typeof message)

typeof undefined // "undefined"
typeof 0 // "number"
typeof true // "boolean"
typeof "foo" // "string"
typeof Symbol("id") // "symbol"
typeof Math // "object" (1)
typeof null // "object" (2)
typeof alert // "function" (3)

/* """"""""""""""" instanceof """"""""""""""" */

let arr = [1, 2, 3];
console.log(arr instanceof Array); // true
console.log(arr instanceof String); // false

/* """"""""""""""" Terinary Oparetor """"""""""""""" */

const x = 10;
y = 20;
z = x <= y ? "x is greater Than y" : "x is less Than y";

console.log(z);

/* ================================== Examples ========================================= */

const smarties = 20;

const kids = 3;

const eachKidsGets = Math.floor(smarties / kids);

console.log(`Each kid gets ${eachKidsGets}`);

const dadGets = smarties % kids;

console.log(dadGets);
