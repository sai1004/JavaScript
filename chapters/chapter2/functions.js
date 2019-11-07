// ===============CallBack Functions ========================== //

function add(x, y) {
  return x + y;
}

console.log(add(2, 5));
// changing function name
const me = add;

me(3, 3);
console.log(me(3, 3));

const you = add;

you(5, 5);
console.log(you(2, 2));

function addFive(x, addReference) {
  return addReference(5, x);
}

console.log(addFive(10, you));

 
// function add(a, b , callback){
//    document.write(`The sum of ${a} and ${b} is ${a+b}.` +"<br>");
//    callback();
//    }
//    // disp() function is called just
//    // after the ending of add() function
//    function disp(){
//    document.write('This must be printed after addition');
//    }
//    // Calling add() function

// add(5,6,disp);
