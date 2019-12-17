var a = false;

/* """"""""""""""""""""""" Prints only When Given Condition is satisfied """"""""""""""""""""" */
if (a == true) {
  console.log("Prints When a is ture");
}

if (a) {
  console.log("Prints When a is true");
}

if (a != true) {
  console.log("Prints When a is not true");
}

if (!a) {
  console.log("Prints When a is not true ");
}

/* """"""""""""""""""" if else condition """"""""""""""""""" */

var age = 06;

if (age >= 18) {
  console.log("You are Elegible To Vote!");
} else {
  console.log("You are Not You are Elegible To Vote!");
}

/* """"""""""""""""""" if else if """"""""""""""""""" */

var subject = "english";

if (subject == "math") {

  console.log("This is math Subject");

} else if (subject == "science") {

  console.log("This is science Subject");

} else if (subject == "english") {

  console.log("This is english Subject");

}
else {

  console.log("please enter the valid subject.");

}




var item = "";

if (!item) {
  console.log("item Not There");
} else {
  console.log("item There");
}