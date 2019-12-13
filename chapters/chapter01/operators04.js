a = 1;

b = 2;

c = 3;

/* comparision oprator */

a == b; // eqauls comparator

b > a;

c < a;

b <= a;

a >= c;

a != c;

/* Assignment oprator */

c += b; // similar to c + c = b

b -= a;

/* Type Operators */

var Bike = { make: "Honda", model: "CLIQ", year: 2018 };

// in operator
console.log("make" in Bike); //
// Output:
// true

// delete

var Bike = { Company1: "Honda", Company2: "Hero", Company3: "Royal Enfield" };
delete Bike.Company1;
console.log(Bike); //
// Output:
// { Company2: 'Hero', Company3: 'Royal Enfield' }

// typeof

let message = "Welcome to " + "JavaTpoint";
console.log(typeof message); //

// instanceof

let arr = [1, 2, 3];
console.log(arr instanceof Array); // true
console.log(arr instanceof String); // false

/* Terinary Oparetor */

const x = 10;
y = 20;
z = x <= y ? "x is greater Than y" : "x is less Than y";

console.log(z);
