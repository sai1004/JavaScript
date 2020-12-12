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
