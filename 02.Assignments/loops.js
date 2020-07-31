// https://www.sitepoint.com/shorthand-javascript-techniques/
// add all even from a list , print sum of all even numbers

/* """"""""""" factorial """"""""""" */

var num = 4;
let factorial = 1;

for (let i = 1; i <= num; i++) {
   factorial *= i;
}

// console.log(factorial);

/* """"""""""" Get Random Color """"""""""" */

let colors = ["red", "black", "white", "blue"];

var i = Math.random() * colors.length;

var randomColor = colors[Math.floor(i)];

console.log(randomColor);

/* """"""""""" Decimal ip address """"""""""" */

let ip = ["192.168.1.0"];

for (i = 0; i < ip.length; i++) {
   for (j = 0; j < 255; j++) {
      // console.log(ip[i].slice(0, 10) + j);
   }
}

/* """"""""""" Randomly Genrate Mac Address """"""""""" */

var hex = "0123456789abcdef";

var mac =
   hex.charAt(Math.random() * 16) +
   hex.charAt(Math.random() * 16) +
   ":" +
   hex.charAt(Math.random() * 16) +
   hex.charAt(Math.random() * 16) +
   ":" +
   hex.charAt(Math.random() * 16) +
   hex.charAt(Math.random() * 16) +
   ":" +
   hex.charAt(Math.random() * 16) +
   hex.charAt(Math.random() * 16) +
   ":" +
   hex.charAt(Math.random() * 16) +
   hex.charAt(Math.random() * 16) +
   ":" +
   hex.charAt(Math.random() * 16) +
   hex.charAt(Math.random() * 16);

console.log(mac);
