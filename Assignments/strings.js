/* Q) Take Input from user AND PRINT the output like next alpha bit of the each letter in the string and replace it*/

/* function encrypt(userInput) {
  for (let i = 0; i < userInput.length; i++) {
    letterCode = userInput[i].charCodeAt(userInput[i]);

    replaceValue = userInput.replace(userInput, 1 + letterCode);

    gotVal = String.fromCharCode(replaceValue);
    console.log(gotVal);
  }
}
// console.log(encrypt("hillo"));

*/

/* Capitalize the letter of the str */

/* var str = "hello i am the king";

var getStr = str.split(" ");

getStr.forEach(item => {
  var j = item.replace(item, item[0].toUpperCase() + item.slice(1));

  console.log(j.charAt(j));
});
*/

/*
  let ip = ["192.168.29.0"];


for (i = 0; i < ip.length; i++) {
  for (j = 0; j < 256; j++) {
    console.log(ip[i].slice(0, 10) + "." + j);
  }
}
*/

// genrating random id using math function
function randomStr(len, id) {
  var str = "";
  for (var i = len; i > 0; i--) {
    console.log(i);
    str += id[Math.floor(Math.random() * id.length)];
  }
  return str;
}

console.log(randomStr(10, "kjsdfh458645kdjfgh"));

function uid() {

  let regx = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
  let uid = randomStr(20, regx);

  return uid.toUpperCase();
}

console.log(uid());
