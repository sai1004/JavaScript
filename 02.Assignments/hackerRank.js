var a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

function fizzBuzz(n) {
    // Write your code here

    n.forEach((i) => {
        if (i % 15 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 == 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        }
    });
}

console.log(fizzBuzz(a));

const myVar = "John wick is a boogy man";

function findRepeatedLetter(str) {
    let pattern = /o/g;

    return str.match(pattern);
}

console.log(findRepeatedLetter(myVar));
