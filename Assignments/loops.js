// https://www.sitepoint.com/shorthand-javascript-techniques/
// add all even from a list , print sum of all even numbers

let list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// converting array to string
console.log(list.toString());

let evenList = [];

list.forEach(item => {
  if (item % 2 == 0) {
    evenList.push(item);
  }
});
console.log(evenList);

let maxOfList = Math.max(...evenList);

console.log(maxOfList);

let minOfList = Math.min(...evenList);

console.log(minOfList);

const reducer = (accumlator, currentValue) => accumlator + currentValue;
let sumOfList = list.reduce(reducer);

console.log(sumOfList);
