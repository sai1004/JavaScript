let list = [1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 13, 15, 17];

// converting array to string
// console.log(list.toString());

let evenList = [];

list.forEach(item => {
  if (item % 2 == 0) {
    evenList.push(item);
  }
});
console.log(evenList);

let maxOfList = Math.max(...evenList);

// console.log(maxOfList);

let minOfList = Math.min(...evenList);

// console.log(minOfList);

const reducer = (accumlator, currentValue) => accumlator + currentValue;
let sumOfList = list.reduce(reducer);

// console.log(sumOfList);

function findInterSection(input) {
  const [firstList, secondList] = input.map(s => s.split(", "));

  const resultMap = {};
  const result = [];

  for (const number of firstList) {
    resultMap[number] = true;
  }

  for (const number of secondList) {
    if (resultMap[number]) {
      result.push(number);
    }
  }

  return result.length ? result.join(",") : false;
}

var arr = ["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"];

console.log(findInterSection(arr));
