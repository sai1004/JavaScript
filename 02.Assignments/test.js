var callbak;

// console.log(callbak);

const setValue = () => {
    callbak = "Value is given after Specified Time";
    console.log(callbak);
};

// setTimeout(setValue, 2000);

/* --------------------------------------------------------              -------------------------------------------------------------- */

var x = 12;

var y = 12;

var promise = new Promise((resolve, reject) => {
    if (x == y) {
        resolve(true);
    } else {
        let err = new Error("X is Not Equal To Y");
        reject(err);
    }
});

function promisify() {
    var data = promise
        .then((data) => {
            console.log("data", data);
        })
        .catch((error) => {
            console.log(error);
        });

    console.log(data);
}

// promisify();

/* -------------------------------------------------------------------------------------- */

function fibonocci(end) {
    // program to generate fibonacci series up to a certain number

    // take input from the user
    const number = parseInt(end);
    let n1 = 0,
        n2 = 1,
        nextTerm;

    console.log("Fibonacci Series:");
    console.log(n1); // print 0
    console.log(n2); // print 1

    nextTerm = n1 + n2;

    while (nextTerm <= number) {
        // print the next term
        console.log(nextTerm);

        n1 = n2;
        n2 = nextTerm;
        nextTerm = n1 + n2;
    }
}

// console.log(fibonocci(10));

var obj1 = {
    x: 43,
    y: "Hello world!",
    z: function () {
        let self = this;
        console.log("name is:", obj1.x);
        console.log("name is:", this.x);
        console.log("name is:", self.x);
    },
};

// console.log(obj1.z());

// var symobol1 = Symbol("This is a Symbol!!");
// console.log(symobol1);

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

console.log(replaceZtoQ(a));
console.log(removeZobj(a));

/* ---------------  Q3  --------------- */

// Template literals (Template strings)

console.log("string text line 1\n" + "string text line 2");
// "string text line 1
// string text line 2"

console.log(`string text line 1
string text line 2`);
// "string text line 1
// string text line 2"

let e = 5;
let f = 10;
console.log("Fifteen is " + (e + f) + " and\nnot " + (2 * e + f) + ".");
// "Fifteen is 15 and
// not 20."

let r = 5;
let s = 10;
console.log(`Fifteen is ${r + s} and
not ${2 * r + s}.`);
// "Fifteen is 15 and
// not 20."

// Nesting templates

function isLargeScreen() {
    return false;
}

const item = { isCollapsed: true };
const classes = `header ${isLargeScreen() ? "" : `icon-${item.isCollapsed ? "expander" : "collapser"}`}`;

console.log(classes);

/* ---------------  Q4  --------------- */

// Spread  Operator

let numbers = [1, 2, 3];

console.log(...numbers);
// 1 2 3

function spreadOperator(x, y, z) {
    return x + y + z;
}

console.log(spreadOperator(...numbers));

let arr1 = [1, 2, 3, 4, 5];

let arr2 = [1, 2, 3, 4, 5];

let arr3 = [...arr1, ...arr2];
// let arr3 = [...[...arr1], ...[...arr2]];

console.log(arr3);

/* ---------------  Q5  --------------- */

// https://medium.com/better-programming/prototypes-in-javascript-5bba2990e04b

function Human(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullName = function () {
        return this.firstName + " " + this.lastName;
    };
}


var person1 = new Human("John", "wick")

console.log(person1.firstName)