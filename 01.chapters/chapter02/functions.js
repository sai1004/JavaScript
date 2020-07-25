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

// console.log(add(2, 5));
// changing function name
const me = add;

me(3, 3);
// console.log(me(3, 3));

const you = add;

you(5, 5);
// console.log(you(2, 2));

function volPizza(radius, height) {
  let result = radius ** 2 * height * Math.PI;

  return result;
}

/*-------------------------------- Scope chaining in javascript -------------------------------- */

// grandParent (global var)
var name = "Chirs Woaks";

function parent() {
  var name = "sammy "; 
  console.log("hello ", name);

  child();

  function child() {
    // var name = "John Wick";
    console.log("hello", name);
  }
}

console.log("hello", name);
parent();

// console.log(volPizza(7, 2));

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

// console.log(newId());

/* """""""""""" factorial """""""""""" */

const factorial = (x) => {
  if (x === 0) {
    return 1;
  }
  return x * factorial(x - 1);
};

// console.log(factorial(5));

/* """""""""""" find if x is prime number """""""""""" */

let x = 12;

function isPrime(num) {
  if (num == 1) {
    return false;
  }

  for (let i = 0; i < parseInt(num / 2) + 1; i++) {
    if (num % i == 0) {
      return false;
    }
    return true;
  }
}

function reverseString(str) {
  return [...String(str)].reverse().join("");
}

// console.log(reverseString("stackoverflow")); // "wolfrevokcats"
// console.log(reverseString(1337)); // "7331"
// console.log(reverseString([1, 2, 3])); // "3,2,1"

// console.log(isPrime(x));

// in ES-5:

var maxFinder = {
  max: 0,
  find: function (numbers) {
    //let's itterate
    numbers.forEach(function (element) {
      var self = this;
      // if element is greater , set it as the max
      if (element > self.max) {
        self.max = element;
      }
    });
  },
};

maxFinder.find([2, 3, 4]);
// console.log(maxFinder.max);
