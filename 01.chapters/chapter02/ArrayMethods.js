/* """""""""""""""""""""""""""""""" Array Methods """""""""""""""""""""" */

var arr = ["b", "e", "a", "o", "p", "n", "r"];

console.log(arr.sort()); // sorting array in alphabetical order

console.log(arr.reverse()); // reversing array

var arr1 = ["a", "b", "c", "d"];

var arr2 = ["e", "f", "g", "h"];

var arr3 = arr1.concat(arr2); // concating array

console.log(arr3);

var arrNums = [1, 2, 3, 7, 8, 5, 9, 8, 2, 3, 6, 5, 4, 8, 9];

console.log(arrNums.sort());

/* """"""""""""""" Getting index position of elements """"""""""""""" */

var students = ["bobby", "johny", "papa", "julie"];

var rollNums = students.indexOf("johny");

console.log(`Index Value position of ${students[rollNums]} is`, rollNums);

/* """"""""""""""" Getting index value from lastindex (reverse) """"""""""""""" */

var AttendeceFromLast = students.lastIndexOf("papa", 3);

console.log(
  `Index Value position of ${students[AttendeceFromLast]} is`,
  AttendeceFromLast
);

/* """"""""""""""" joins the value passed in join method for every element """"""""""""""" */

console.log(students.join("! ")); //

/* """"""""""""""" Slice Method """"""""""""""" */

var racers = ["bobby", "johny", "papa", "julie"];

var firstTwoFinishers = racers.slice(0, 2);

console.log(firstTwoFinishers);

const employee = [
  { userId: "1", firstName: "Romy", pay: 150000, email: "romin@gmail.com" },

  { userId: "2", firstName: "Neil", pay: 90000, email: "neilrirani@gmail.com" },

  { userId: "3", firstName: "Tomy", pay: 130000, email: "tomhanks@gmail.com" },

  { userId: "4", firstName: "john", pay: 70000, email: "neilrirani@gmail.com" },

  { userId: "5", firstName: "jake", pay: 130000, email: "tomhanks@gmail.com" }
];

/* """"""""""""""" Filter Method """"""""""""""" */

var leastSalary = employee.filter(item => {
  return item.pay <= 100000;
});

console.log(leastSalary);

/* """"""""""""""" Map Method """"""""""""""" */

var hikePay = employee.map(item => {
  return (item.pay = item.pay * 2);
});

console.log(hikePay);

console.log([1, 2, 3].map(index => index + 5));

/* """"""""""""""" ForEach Method """"""""""""""" */

var employees = employee.forEach(item => {
  console.log(item);
});

/* """"""""""""""" Reduce Method """"""""""""""" */

var totalPayOfEmps = hikePay.reduce((accumulator, value) => {
  return (item = accumulator + value);
});

console.log(totalPayOfEmps);

nums = [100, 100, 300, 100];

var sum = nums.reduce((acc, val) => {
  let item = acc + val;
  return item;
});

console.log(sum);

/* """"""""""""""" finding objs in array """"""""""""""" */

const pets = [
  { type: "Dog", name: "Max" },
  { type: "Cat", name: "Karl" },
  { type: "Dog", name: "Tommy" }
];

pet = pets.find(pet => pet.type === "Dog" && pet.name === "Tommy");
console.log(pet);
