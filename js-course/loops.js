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

var list = ["abc", "def", "ghi", "jkl", "mno", "pqr", "stu"];

for (let i = 0; i < list.length; i++) {
  var openList = list[i];

  console.log(openList);
}

// =====================parsing data====================\\

//The JavaScript JSON.parse() takes a JSON string and
// transforms it into a JavaScript object.

var json = '{ "firstName":"ASHU", "lastName":"BHATI", "studentCode":7 }';
var student = JSON.parse(json);

console.log(student.firstName + " " + student.lastName);

var dummy = '["c++","java","python" ,"ruby","perl"]';

var cons = JSON.parse(dummy);

console.log(cons);
