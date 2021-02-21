// https://www.tutorialsteacher.com/javascript/prototype-in-javascript
/*  -------------------------------------     ----------------------------------------- */

// Prototype in JavaScript

// JavaScript is a dynamic language. You can attach new properties to an object at any time as shown below.

function Car() {
    this.name = "Swift";
    this.brand = "Suzuki";
    this.color = "Black";
}

var carOne = new Car();

carOne.price = 1200000;

console.log("name >>", carOne.name);
console.log("color >>", carOne.color);
console.log("price >>", carOne.price);

var carTwo = new Car();

console.log("price >>", carTwo.price); // undefined

/*

As you can see in the above example, price property is attached to carOne instance. However, carTwo instance will not have price property because it is defined only on carOne instance.

So what to do if we want to add new properties at later stage to a function which will be shared across all the instances?

The answer is Prototype.


The prototype is an object that is associated with every functions and objects by default in JavaScript, 
where function's prototype property is accessible and modifiable and object's prototype property (aka attribute) is not visible.
Every function includes prototype object by default.

*/

/*  -------------------------------------     ----------------------------------------- */

function Car() {
    this.name = "Swift";
    this.brand = "Suzuki";
    this.color = "Black";
}

Car.prototype.price = 1200000;

var carOne = new Car();

console.log("carOne price >>", carOne.price);

var carTwo = new Car();

console.log("carTwo price >>", carTwo.price);
