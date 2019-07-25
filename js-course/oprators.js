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

console.log(2 == "2"); // TRUE , doesn't matter data type value shd be same
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



console.log(10 > 11 ? "narendra" : "this is some one"); // Then terinary oparator

//=== for loops ===\\

for( let x = 0; x <= 5; x++ ){  // 0 to 5 increament 
    for(var j = 0; j <= 5; j++){
        console.log('First loop: ' + x + ' - IL:' + j)
    }

}