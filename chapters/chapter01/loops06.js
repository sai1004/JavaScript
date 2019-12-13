// ===================== for loops ====================//

// print square of array of the elements

var lst = [2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < lst.length; i++) {
  x = lst[i] ** 2;
  console.log(x);
}

// of for loop
for (let value of ["a", "b", "c"]) {
  console.log(value);
}

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
