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

/* Q) Find missing number in array ? */

function findMissingNumbers(array) {
  const arraySize = array.length;
  const missedNum = [];
  let i = 0;
  let j = array[0];
  let jSize = array[arraySize - 1];
  while (j < jSize) {
    array[i] === j ? (i += 1) : missedNum.push(j);
    j++;
  }
  return missedNum;
}

console.log(findMissingNumbers(list));

/* Q) Write a Range function That takes start and stop function ? */

function range(start, stop) {
  var count = [];
  for (var i = start; i <= stop; i++) {
    count.push(i);
  }
  return count;
}

function square(arr) {
  let i = [];
  arr.forEach(item => {
    i.push(item ** 2);
  });
  return i;
}

console.log(square(list));