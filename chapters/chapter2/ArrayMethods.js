var colors = ["red", "orange", "green"];
console.log(colors);

// colors.push("black");
// console.log(colors);

// colors.pop();
// console.log(colors);

// colors.shift();
// console.log(colors);

// colors.unshift("red");
// console.log(colors);
nums = [5, 65];
var t = nums.reduce((acc, val) => {
  let item = acc + val;
  return item;
});

console.log(t);

let i = colors.lastIndexOf("green", 20);
console.log(i);

let iIndex = colors.indexOf("orange");

console.log(iIndex);

var obj = { colors, nums };

obj.colors[2] = "black";
console.log(obj);

const pets = [
  { type: "Dog", name: "Max" },
  { type: "Cat", name: "Karl" },
  { type: "Dog", name: "Tommy" }
];

pet = pets.find(pet => pet.type === "Dog" && pet.name === "Tommy");
console.log(pet);
