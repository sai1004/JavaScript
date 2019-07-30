//=== for loops ===\\

for (let x = 0; x <= 5; x++) {
  // 0 to 5 increament
  for (var j = 0; j <= 5; j++) {
    //nested for loop
    console.log("First loop: " + x + " - IL:" + j);
  }
}

//== length key word ==\\

var user = ["James", "Brian", "Lucas"];

for (var i = 0; i < user.length; i++) {
  console.log(user[i]);
}

//== while loop ==\\

var x = 2;

while (x <= 2) {
  console.log(x);
  x++; // break it or increament
  // break
}

var logged = true;
var i = 0; // 1

while (logged) {
  if (i == 3) {
    logged = false;
  }
  console.log(i);
  i++;
}
