var sentence = "To live Like a King work Hard like a slave";

console.log(sentence.toLowerCase());

console.log(sentence.toUpperCase());

console.log(sentence.bold());

console.log(sentence.slice(3, 7));

console.log(sentence.split(" "));

console.log(sentence.search("a"));

console.log(sentence.replace("King", "queen"));

console.log(sentence.replace(" ", "\n"));

console.log(sentence.repeat(2));

console.log(sentence.concat(", I am appended to this string."));

console.log(sentence.includes("live"));

console.log(sentence.indexOf("K"));

console.log(sentence.lastIndexOf("a"));

console.log(sentence.charAt(6));

console.log(sentence.charCodeAt("e"));

console.log(sentence.substring());

console.log("----------- ------------------");

/* """"""""""""" Case Sencitive """"""""""""" */

console.log(sentence.startsWith("t"));

console.log(sentence.startsWith("T"));

console.log(sentence.endsWith("e"));

console.log(sentence.endsWith("E"));

var trimMe = "    iam string taking Long unWanted Spaces    ";

console.log(trimMe.trim());

/* """""""""""""""" tricky type casting """""""""""""""" */
var a = "101" - 1; // o/p: 100

console.log(a);

/* """""""""""""""" type Conversion """""""""""""""" */

var a = "iam string";

var b = 420;

var c = null;

var d = undefined;

console.log(typeof (a + b));

console.log(typeof b.toString());

var str = "hey JudE";
var re = /[A-Z]/g;
var re2 = /[.]/g;

console.log(str.search(re)); // returns 4, which is the index of the first capital letter "J"
console.log(str.search(re2)); // returns -1 cannot find '.' dot punctuation

var worldString = "Hello, world";

console.log(worldString.small()); // <small>Hello, world</small>
console.log(worldString.big()); // <big>Hello, world</big>
console.log(worldString.fontsize(7)); // <font size="7">Hello, world</fontsize>

var regx = /[A-Z]/g;
console.log(string.match(regx)); // Finding The Capital letters in string var using math and regx expression

let regexp = /t(e)(st(\d?))/g;
let str = "test1 test2";

let array = [...str.matchAll(regexp)];

console.log(array[0]);

var paragraph =
   "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. ";

var words = paragraph.split(" ");

console.log(words.length);

var captial = /[A-Z]/g;

console.log("Capital letters are", paragraph.match(captial));

var small = /[a-z]/g;

var smal = paragraph.match(small);

console.log("Small letters are: ");
