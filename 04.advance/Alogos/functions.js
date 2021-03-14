function sampleSumOf() {
    // var number = 0;
    // var sum = 0;
    // for (number = 0; number < 10; number++) {
    //     sum += number; // sum + num
    // }
    // console.log(sum);
}

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function sumOfArray(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

// console.log(sumOfArray(numbers));

function factorialOf(number) {
    let factorial = 1;

    for (let i = 1; i <= number; i++) {
        factorial *= i;
    }
    return factorial;
}

console.log(factorialOf(3));

/* Recursion way of doing factorial function */

function factorial(number) {
    if (number === 1) {
        return number;
    } else {
        return number * factorial(number - 1);
    }
}

console.log(factorial(3));

/*

When a function is called recursively, the results of the function’s computation are tem‐
porarily suspended while the recursion is in progress. To demonstrate how this works,
here is a diagram for the factorial() function when the argument passed to the func‐
tion is 5:

5 * factorial(4)
5 * 4 * factorial(3)
5 * 4 * 3 * factorial(2)
5 * 4 * 3 * 2 * factorial(1)
5 * 4 * 3 * 2 * 1
5 * 4 * 3 * 2
5 * 4 * 6
5 * 24
120


*/

function curve(arr, amt) {
    let returnVal = arr.map((item) => {
        return item + amt;
    });
    return returnVal;
}

console.log(curve(numbers, 5));
