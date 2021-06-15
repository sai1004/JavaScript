const str = "hi i am a string a line sentance of";

/* -----------------> find a longest word in given string <----------------- */

// function findLongestWord(str) {
//     let longWord = str.split(" ").sort((a,b) => {
//             console.log(a,b)
//         return b.length - a.length
//     })
//     return longWord[0]
// }

// console.log(findLongestWord(str))

// function findLongestWord(str) {
//     const splitStr = str.split(" ");

//     let longestWordLen = 0;

//     let longWord = "";

//     splitStr.forEach((word) => {
//         if (word.length > longestWordLen) {
//             longestWordLen = word.length;
//             longWord = word;
//         }
//     });

//     return `Longest Word Length is [${longestWordLen}] and Longest word is > (${longWord})`;
// }

// function findLongestWord(str) {
//     let longestWord = str.split(" ").reduce((longestVal, currentValue) => {
//         return currentValue.length > longestVal.length ? currentValue : longestVal;
//     }, "");

//     return longestWord;
// }

// console.log(findLongestWord(str));

function findLongestWord(str) {
    return str.split(" ").reduce((x, y) => {
        return Math.max(x, y.length);
    }, 0);
}

// console.log(findLongestWord(str))

/* -----------------> find a longest word in given string <----------------- */

/* find a repeated words in given string */

function findRepeatedWords(str) {
    // let pattern = /s/g;
    // let s = str.match(pattern);
    // return s;
}

// console.log(findRepeatedWords(str));

/* -----------------> reverse a given string <----------------- */

function reverseStr(str) {
    return str.split("").reverse().join("")
}

// function reverseStr(str) {
//     return [...String(str)].reverse().join("");
// }

// function reverseStr(str) {
//     let newStr = "";

//     for (let i = str.length - 1; i >= 0; i--) {
//         newStr += str[i];
//     }

//     return newStr;
// }

console.log(reverseStr(str));
