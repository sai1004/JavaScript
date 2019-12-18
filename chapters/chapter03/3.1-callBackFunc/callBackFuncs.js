/* """""""""""""""""""""" CallBack Functions """""""""""""""""""" */

/* What is a Callback?

Simply put: A callback is a function that is to be executed after another function has finished executing 

— hence the name ‘call back’
*/

function add(a, b, callback) {
  console.log(`The sum of ${a} and ${b} is ${a + b}.` + "<br>");
  callback(); // callback argument is called here, So callback function is Executed here after the above line
}

// add() function is called with arguments given below
add(5, 6, function disp() {
  console.log("This must be printed after addition.");
});




function first() {
  // Simulate a code delay
  setTimeout(function() {
    console.log(1);
  }, 500);
}
function second() {
  console.log(2);
}
first();
second();
