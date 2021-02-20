// let re = /ab+c/i;

// let re = new RegExp("ab+c", "i");

/* split with white space globaly */

var pattern = /\w+/g;

var string = "Hello JavaScript! I Love You..";

console.log(string.match(re));

let url = "http://xxx.domain.com";
console.log(/[^.]+/.exec(url)[0].substr(7));

var re = /(\w+)\s(\w+)/;
var str = "John Smith";
str.replace(re, "$2, $1"); // "Smith, John"
RegExp.$1; // "John"
RegExp.$2; // "Smith"
console.log(str);

const paragraph = `Promises in node.js promised to do some work and then had separate callbacks that would be executed for success and failure as well as handling timeouts.
 Another way to think of promises in node.js was that they were emitters that could emit only two events: 
success and error.The cool thing about promises is you can combine them into dependency chains (do Promise C only when Promise A and Promise B complete).`;

const reg = /\w+/g;

const modified = paragraph.match(reg);

console.log(modified);
