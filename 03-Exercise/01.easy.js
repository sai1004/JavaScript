/*
 Question: Write a program which accepts a sequence of comma separated 4 digit binary
 numbers as its input and then check whether they are divisible by 5 or not. 
 The numbers that are divisible by 5 are to be printed in a comma separated sequence. 
 Example: 0100,0011,1010,1001 Then the output should be: 1010 Notes: Assume the data 
 is input by console.

 Hints: In case of input data being supplied to the question, it should be assumed to
 be a console input.

*/

const seq = "0100,0011,1010,1001";

function isSequenceDivBy5(sequence) {
    let outPut = "";

    let s = sequence.split(",");

    s.forEach((number, index) => {
        if (number % 5 == 0) {
            if (index == 0) {
                outPut += number;
            } else {
                outPut += "," + number;
            }
        }
    });

    return outPut;
}

// console.log(isSequenceDivBy5(seq));

/*
    Question: Write a program that accepts a sentence and calculate
    the number of letters and digits. Suppose the following input is supplied 
    to the program: hello world! 123 Then, the output should be: LETTERS 10 DIGITS 3
*/

function calculateLetterNums(str) {
    let lettersPattern = /[a-zA-Z]/g;
    let digitPattern = /[0-9]/g;

    let letters = str.match(lettersPattern);

    let digits = str.match(digitPattern);

    return { LETTERS: letters.length, DIGITS: digits.length };
}

// console.log(calculateLetterNums("hello world! 123"));

/*
Question: A website requires the users to input username and password to register. Write a program to check the validity of password input by users. Following are the criteria for checking the password:

    At least 1 letter between [a-z]
    At least 1 number between [0-9]
    At least 1 letter between [A-Z]
    At least 1 character from [$#@]
    Minimum length of transaction password: 6
    Maximum length of transaction password: 12 Your program should accept a sequence of comma separated passwords and will check them according to the above criteria. Passwords that match the criteria are to be printed, each separated by a comma. Example If the following passwords are given as input to the program: ABd1234@1,a F1#,2w3E*,2We3345 Then, the output of the program should be: ABd1234@1
*/

function validatePassowrd(password) {
    let pattern = /[a-zA-Z0-9(#$@)]/g;

    // if (password == password.match(pattern).join("") && password.length > 6 && password.length < 12) {
    //     console.log("Psassword Strong".search("[a-z]"));
    // } else {
    //     console.log("Weak Password");
    // }

    // console.log(password.search("[a-z]"))
}

// console.log(validatePassowrd("987asdsS432sd"));

const arr = [1, 2, 3, 4, 5];

function minMax(arr) {
    // Q from Hackerrank
    /** Hint
     * itterate arr
     * remove one ele where i == x
     * push all remaining ele to tempArray
     * sum it and push to final array
     * clear tempArray
     * increment x + 1
     *
     */

    const finalArr = [];
    let tempArray = [];
    let x = 0;
    let min = 0;
    let max = 0;

    for (i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (j == x) {
                continue;
            }
            console.log(j);
            tempArray.push(arr[j]);
        }

        let sum = tempArray.reduce((x, y) => x + y);
        tempArray = [];
        x += 1;
        finalArr.push(sum);
    }

    min = Math.min(...finalArr);
    max = Math.max(...finalArr);
    return `${min + " " + max}`;
}

// console.log(minMax(arr));

function countCamlecaseStr(str) {
    // Q from Hackerrank

    let a = str.split(/[A-Z]/g);

    return a.length;
}

console.log(countCamlecaseStr("oneTwoThree"));
