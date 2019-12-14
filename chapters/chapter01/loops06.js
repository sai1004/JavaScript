// ===================== for loops ====================//

// print square of array of the elements

var list = [2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < list.length; i++) {
  console.log(`square of [${list[i]}] is --> `, list[i] ** 2);
}

// of for loop

var colors = ["red", "green", "blue", "yellow"];

for (color of colors) {
  console.log("-->", color);
}

for (let value of ["a", "b", "c"]) {
  console.log(value);
}

// converting array to object

console.log({ ...colors });

console.log([..."abc"]);

// ================== While loops ======================= //

var count = 0;

while (count <= 10) {
  console.log(count);
  count++;
}

// ================== do While loops ======================= //

var text = "";
var i = 0;
do {
  text += "The number is " + i + "\n";
  i++;
} while (i < 10);

console.log(text);

console.log(([a, b, c] = new Set(["a", "b", "c"])));
