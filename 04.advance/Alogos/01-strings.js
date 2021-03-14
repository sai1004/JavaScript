const str = "hi i am a string a line of sentance";

/* -----------------> find a longest word in given string <----------------- */

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
//     let longWord = str.split(" ").sort((a, b) => {
//         return b.length - a.length;
//     });
//     console.log("longWord", longWord);
//     return longWord[0];
// }

function findLongestWord(str) {
    let longestWord = str.split(" ").reduce((longestVal, currentValue) => {
        return currentValue.length > longestVal.length ? currentValue : longestVal;
    }, "");

    return longestWord;
}

// console.log(findLongestWord(str));

/* -----------------> find a longest word in given string <----------------- */

/* find a repeated words in given string */

function findRepeatedWords(str) {
    // let pattern = /s/g;

    // let s = str.match(pattern);

    // return s;
 
}

console.log(findRepeatedWords(str));
