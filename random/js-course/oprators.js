// oparators
//== Addition ==\\
var previous = 200;
var current = 100;
var total = "The Total is: " + (previous + current);
// console.log(total);
current += previous;

console.log(current);

var usrname = "James";
var msg = "Welcome back " + usrname;

//== subs ==\\

var total = "total amount is: " + (previous - current);

var msg = "welcome back " - usrname;

//== multiply ==\\

var total = "total amount is: " + previous * current;

//== divide ==\\

var total = "total amount is: " + previous / current;

console.log(total);

//== COMPARE ==\\

console.log(2 == "2"); // TRUE , doesn't matter data type, value shd be same
console.log(2 == 2); // TRUE
console.log(2 === "2"); // FALSE , matters data type strict
console.log(2 === 2); // TRUE
console.log(2 != 2); //FALSE
console.log(2 != "2"); // FALSE
console.log(2 !== "2"); // TRUE
console.log("James" == "James"); // TRUE
console.log(5 > 2); // True
console.log("jamsin" == "jamsin");

if (1 == 2) {
   console.log("true");
} else {
   console.log("false");
}

console.log(10 > 11 ? "TRUE statement" : "FALSE statement"); // (Then) terinary oparator

const x = 9;
const y = 2;

if (x == 10 && y == 5) {
   // ampercent & takes both values shd be true
   console.log("x is 10 and y is 5");
} else if (x > 10 && y < 10) {
   console.log(" x is greater than 10 :" + x, "y is lesser than 10");
}

// var userinput = prompt("what color you want?"); // to change body color

// var bodyColor = document.body.style;

// bodyColor.backgroundColor = userinput;
