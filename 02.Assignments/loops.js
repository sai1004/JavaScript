// https://www.sitepoint.com/shorthand-javascript-techniques/
// add all even from a list , print sum of all even numbers

let list = [1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 13, 15, 17];

// converting array to string
// console.log(list.toString());

// let evenList = [];

// list.forEach(item => {
//   if (item % 2 == 0) {
//     evenList.push(item);
//   }
// });
// console.log(evenList);

// let maxOfList = Math.max(...evenList);

// console.log(maxOfList);

// let minOfList = Math.min(...evenList);

// console.log(minOfList);

// const reducer = (accumlator, currentValue) => accumlator + currentValue;
// let sumOfList = list.reduce(reducer);

// console.log(sumOfList);

/*
  let ip = ["192.168.1.0"];


for (i = 0; i < ip.length; i++) {
  for (j = 0; j < 256; j++) {
    console.log(ip[i].slice(0, 10) + "." + j);
  }
}
*/

// factorial 

var num = 4;
let factorial = 1;

for (let i = 1; i <= num; i++) {
 
  factorial *= i;
 
}

console.log(factorial);

