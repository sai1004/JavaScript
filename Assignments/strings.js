/* Q) Take Input from user AND PRINT the output like next alpha bit of the each letter in the string and replace it*/

function encrypt(userInput) {
  for (let i = 0; i < userInput.length; i++) {
    letterCode = userInput[i].charCodeAt(userInput[i]);

    replaceValue = userInput.replace(userInput, 1 + letterCode);

    gotVal = String.fromCharCode(replaceValue);
    console.log(gotVal);
  }
}

console.log(encrypt("hillo"));

/* Capitalize the letter of the str */

var str = "hello i am the king";

var getStr = str.split(" ");

getStr.forEach(item => {
  var j = item.replace(item, item[0].toUpperCase() + item.slice(1));
  console.log(j);
});
