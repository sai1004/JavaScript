/* -----------   Q1   ---------- */

// Hoisting

console.log(hoistVar); // Output: undefined

var hoistVar = "The variable has been hoisted.";

function hoist() {
    var message;
    console.log(message);
    message = "Hoisting is all the rage!";
}

hoist(); // Ouput: undefined

/* -----------   Q2  ----------- */

var a = [
    {
        x: 1,
        y: 2,
        z: 3,
    },
    {
        x: 4,
        y: 5,
        z: 6,
    },
    {
        x: 7,
        y: 8,
        z: 9,
    },
];

function removeZobj(arr) {
    let modify = [];
    arr.forEach((item) => {
        delete item.z;
        modify.push(item);
    });
    return modify;
}

function replaceZtoQ(arr) {
    let modify = [];
    arr.forEach((item) => {
        item["q"] = item.z;
        delete item.z;
        modify.push(item);
    });
    return modify;
}

// console.log(replaceZtoQ(a));
// console.log(removeZobj(a));

/* ---------------  Q3  --------------- */

// Template literals (Template strings)

// console.log("string text line 1\n" + "string text line 2");
// "string text line 1
// string text line 2"

// console.log(`string text line 1
// string text line 2`);
// "string text line 1
// string text line 2"

let e = 5;
let f = 10;
// console.log("Fifteen is " + (e + f) + " and\nnot " + (2 * e + f) + ".");
// "Fifteen is 15 and
// not 20."

let r = 5;
let s = 10;
// console.log(`Fifteen is ${r + s} and
// not ${2 * r + s}.`);
// "Fifteen is 15 and
// not 20."

// Nesting templates

function isLargeScreen() {
    return false;
}

const item = { isCollapsed: true };
const classes = `header ${isLargeScreen() ? "" : `icon-${item.isCollapsed ? "expander" : "collapser"}`}`;

// console.log(classes);

/* ---------------  Q4  --------------- */

// Spread  Operator

let numbers = [1, 2, 3];

// console.log(...numbers);
// 1 2 3

function spreadOperator(x, y, z) {
    return x + y + z;
}

// console.log(spreadOperator(...numbers));

const circle = {
    radius: 10,
};

// console.log(...circle);
//  this wont work calling directly

const coloredCircle = {
    ...circle, // this will work
    color: "black",
};

console.log(coloredCircle);

let arr1 = [1, 2, 3, 4, 5];

let arr2 = [1, 2, 3, 4, 5];

let arr3 = [...arr1, ...arr2];
// let arr3 = [...[...arr1], ...[...arr2]];

console.log(arr3);

/* ---------------  Q5  --------------- */

//prototypes

// https://medium.com/better-programming/prototypes-in-javascript-5bba2990e04b

function Human(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullName = function () {
        return this.firstName + " " + this.lastName;
    };
}

var person1 = new Human("John", "wick");

// console.log(person1.firstName)

/* ---------------  Q6  --------------- */
// What is destructuring assignment


var [one, two, three] = ["Jan", "Feb", "Mar"];

console.log(one);
console.log(two);
console.log(three);
