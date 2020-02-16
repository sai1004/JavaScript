// // Q) create range function

// function range(start, stop) {
//   var count = [];
//   for (var i = start; i <= stop; i++) {
//     count.push(i);
//   }
//   return count;
// }

// // Q) Find missing number in array?

// function findMissingNumbers(array) {
//   const arraySize = array.length;
//   const missedNum = [];
//   let i = 0;
//   let j = array[0];
//   let jSize = array[arraySize - 1];
//   while (j < jSize) {
//     array[i] === j ? (i += 1) : missedNum.push(j);
//     j++;
//   }
//   return missedNum;
// }

// // console.log(findMissingNumbers(list));

// /* Capitalize the letter of the str */

// /* var str = "hello i am the king";

// var getStr = str.split(" ");

// getStr.forEach(item => {
//   var j = item.replace(item, item[0].toUpperCase() + item.slice(1));

//   console.log(j.charAt(j));
// });
// */

// /* Q) Take Input from user AND PRINT the output like next alpha bit of the each letter in the string and replace it*/

// /* function encrypt(userInput) {
//   for (let i = 0; i < userInput.length; i++) {
//     letterCode = userInput[i].charCodeAt(userInput[i]);

//     replaceValue = userInput.replace(userInput, 1 + letterCode);

//     gotVal = String.fromCharCode(replaceValue);
//     console.log(gotVal);
//   }
// }
// // console.log(encrypt("hillo"));

// */

// // genrating random id using math function
// function randomStr(len, id) {
//   var str = "";
//   for (var i = len; i > 0; i--) {
//     str += id[Math.floor(Math.random() * id.length)]; // alternate of math.floor is ~~ (VALUE)
//   }
//   return str;
// }

// console.log(randomStr(20, "kjsdfh458645kdjfgh"));

// function uid() {
//   let regx = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
//   let uid = randomStr(20, regx);

//   return uid.toUpperCase();
// }

function generateStrongPass(password) {
  // let password = "";

  let strongPassword = "";

  let mergeLetters = "";

  regex = /[/s]/;

  chunkSentence = password.split(" ");

  for (let i = 0; i < chunkSentence.length; i++) {
    firstOfDiv = chunkSentence[i].slice(0, 1);

    console.log(firstOfDiv);

    mergeLetters += firstOfDiv;
  }
  // console.log(mergeLetters);

  // console.log(mergeLetters.split(""));

  return strongPassword;
}

// console.log(generateStrongPass("To live Like a King work Hard like a slave"));

