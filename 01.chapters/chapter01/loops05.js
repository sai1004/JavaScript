/* !!!!!!!!!!!!!!!!! for loops !!!!!!!!!!!!!!!!! */

/* """"""""""""""""""  print square of array of the elements """""""""""""""""" */

var arr = [2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < arr.length; i++) {
  console.log(`square of [${arr[i]}] is --> `, arr[i] ** 2);
}

/* """"""""""""""""""  of for loop """""""""""""""""" */

var colors = ["red", "green", "blue", "yellow"];

for (color of colors) {
  console.log("-->", color);
}

for (let value of ["a", "b", "c"]) {
  console.log(value);
}

/* ES 5 ForLoop */
var arr = [
  { item: "asd", price: 12 },
  { item: "asd", price: 13 },
  { item: "asd", price: 15 },
  { item: "asd", price: 16 }
];

var total = 0;

arr.forEach(i => {
  total = total + i.price;
});
console.log(total);

/*  """""""""""""""""" converting array to object """""""""""""""""" */

console.log({ ...colors });

console.log([..."abc"]);

/* !!!!!!!!!!!!!!!!!!! While loops !!!!!!!!!!!!!!!!! */

var count = 0;

while (count <= 10) {
  console.log(count);
  count++;
}

/* !!!!!!!!!!!!!!!!! do While loops !!!!!!!!!!!!!!!!! */

var text = "";
var i = 0;
do {
  text += "The number is " + i + "\n";
  i++;
} while (i < 10);

console.log(text);

console.log(([a, b, c] = new Set(["a", "b", "c"])));
