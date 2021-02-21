// // es-5 style
// const addNums = (num1 = 1, num2 = 1) => num1 + num2;
// console.log(addNums(5, 5));

// // constructor function
// function Person(id, firstName, lastName, dob) {
//   this.id = id;
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.dob = new Date(dob);
//   this.getBirthYear = function() {
//     return this.dob.getFullYear();
//   };
//   this.getFullName = function() {
//     return `${this.firstName} ${this.lastName}`;
//   };
// }

// // Instant object

// var persons = [];

// const person1 = new Person("1", "John", "Doe", "4-3-1992");
// const person2 = new Person("2", "Jane", "Doe", "4-3-1992");

// persons.push(person1, person2);

// console.log(person1);
// console.log(person2.firstName);

// console.log(person1.getBirthYear());

// console.log(person1.getFullName());

var button = document.getElementById("button");
button.addEventListener("click", validate);

var emptyArr = [];

function validate(e) {
    console.log(e.target.value);
    var email = document.getElementById("email").value;
    var passwd = document.getElementById("password").value;

    if (email == "" || email == null || passwd == "" || passwd == null) {
        document.getElementById("para").innerHTML = "please enter the fields";
    }
}
