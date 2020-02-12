var names = ["bob", "alice", "foo", "bar"];

/* """""""""""""""""" Accessing Array elements """""""""""""""""" */

console.log(names);

console.log(names[2]);

console.log(names.length); // starts from 1 not 0, O/p: is 4

console.log(names[names.length - 2]);

/* """"""""""""""""""  Adding Elements to array """""""""""""""""" */

names.push("kiran"); // adds at last element of array

console.log(names);

names.unshift("i want first place"); // adds at first element of array

console.log(names);

/* """""""""""""""""" Removing Array elements """""""""""""""""" */

names.pop(); // removes last element

console.log(names);

names.shift(); // removes first element

console.log(names);

console.log(names.splice(0, 1));

console.log(names);

/* """""""""""""""""" Updating Array elements """""""""""""""""" */

names[1] = "rammy"; // alice is changed to rammy

names[2] = "i am new joinner in arr";

console.log(names);

console.log(names.splice(2, 2, "myplaceAt2", "myplaceAt3")); // replaces the index value elements, index = 2, elemts = 2

console.log(names);
