//=== for loops ===\\

// for (let x = 0; x <= 5; x++) {
//   // 0 to 5 increament
//   for (var j = 0; j <= 5; j++) {
//     //nested for loop
//     console.log("First loop: " + x + " - IL:" + j);
//   }
// }

// //== length keyword ==\\

// var user = ["James", "Brian", "Lucas"];

// for (var i = 0; i < user.length; i++) {
//   console.log(user[i]);
// }

// //== while loop ==\\

// var x = 2;

// while (x <= 2) {
//   console.log(x);
//   x++; // break it or increament
//   // break
// }

// var logged = true;
// var i = 0; // 1

// while (logged) {
//   if (i == 3) {
//     logged = false;
//   }
//   console.log(i);
//   i++;
// }

// var list = ["abc", "def", "ghi", "jkl", "mno", "pqr", "stu"];

// for (let i = 0; i < list.length; i++) {
//   var openList = list[i];

//   console.log(openList);
// }

// =====================parsing data====================\\

//The JavaScript JSON.parse() takes a JSON string and
// transforms it into a JavaScript object.

// var json = '{ "firstName":"ASHU", "lastName":"BHATI", "studentCode":7 }';
// var student = JSON.parse(json);

// console.log(student.firstName + " " + student.lastName);

// var dummy = '["c++","java","python" ,"ruby","perl"]';

// var cons = JSON.parse(dummy);

// console.log(cons);

// for( var i = 0; i = elements.length; i++ ) {
//   elements[i].style.color = 'green'
// }

// var person = [
//   { fname: "Nick", lname: "Jonas", age: 40},
//   { fname: "jacky", lname: "Jonas", age: 18 },
//   { fname: "James", lname: "Jonas", age: 20 },
//   { fname: "Bond", lname: "Jonas", age: 30 },
//   { fname: "Atom", lname: "Jonas", age: 2 },
//   { fname: "Jason", lname: "Jonas", age: 16 },
//   { fname: "Johnathan", lname: "Jonas", age: 36 },
//   { fname: "Chris", lname: "Jonas", age: 26 }
// ];
// // var person = [ 'kj','sdfs','sdfsd','sfsdf']
// for (var x in person) {
//   console.log(person[x]);

// }

var button = document.getElementById("submit");

button.addEventListener("click", onSubmit);

function onSubmit() {
  var name = document.getElementById("name").value;

  var newUser = new newUser()
   
    newUser.name = String;
    
    newUser.name == name



 console.log(newUser.name)

  // var users = [{"name":"sai"}];

  // if (users.name == name) {
  //   console.log("user Already exists ");
  // } else if (name == "") {
  //   console.log("please enter the vale ");
  // } else {
  //   users.push(name);

  //   console.log(users);

  //   // button.removeEventListener("click", onSubmit);
  //   console.log("Cong user created Successfully ");
  // }
}
