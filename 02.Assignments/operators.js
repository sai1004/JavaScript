var x = 8;

var y = 6;

if (x < 10 && y > 11) {
    console.log("Prints Only When Two Conditions are Satisfied! (True, True) ");
}

if (x < 10 || y > 11) {
    console.log("Prints Only When any One Condition is Satisfied! ");
}

// output of x going to input to y

console.log(x | y);

console.log(!x == !y);

console.log(x !== y);

if (x !== y) {
    console.log("Prints Only  x is not equal to y ! ");
}
