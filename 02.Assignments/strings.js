// var para = `Lorem j Lorem`;

// console.log(para);

// var wordCount = para.match(/ (\w+)/g).length;
// var space = para.match(/(\s+)/g).length;
// console.log(wordCount);
// console.log(space);

var task = "httpgooglecom";

let part = task.replace("p", "p://").replace("e", "e.");

// console.log(part);

// o/p: http://google.com

// curl -X DELETE --header 'Accept: application/json' 'http://127.0.0.1:8080/public-portal-api/api/nomination/delete-nomination-filename/3136163578?nominationId=%22New%20Text%20Document.txt%22&filename=9373'

const str = "Lorem ipsum is a dummy data for developers!";

function reverseString(str) {
    let returnVal = str.split("").reverse().join("");
    // let returnVal = [...str].reverse().join("");

    return returnVal;
}

console.log(reverseString(str));

function test(a, b, c) {
    let d = a + b;
    console.log(c);
}

function pass() {
    return "i 'm the function";
}

// console.log(test(4, 2, pass()));

let arr1 = [1, 2, 3, 4];

let arr2 = ["a", "b", "c", "d"];

console.log(arr2.fill("a", 1, 2));

console.log(arr1.copyWithin(2, 0, 2));

// console.log(arr2.some("c"));

// console.log(arr2.every("c"));

let numbers = [
    { name: "sak", percentage: 23 },
    { name: "sak", percentage: 23 },
    { name: "sak", percentage: 23 },
    { name: "sak", percentage: 23 },
    { name: "sak", percentage: 23 },
    { name: "sak", percentage: 23 },
];

function calculateTotal(arrayOfNumbers) {
    let arr = [];
    const reducer = (accumlator, currentValue) => accumlator + currentValue;

    arrayOfNumbers.forEach((element) => {
        arr.push(element.percentage);
    });
    console.log(arr);

    return arr.reduce(reducer);
}

console.log("total", calculateTotal(numbers));
