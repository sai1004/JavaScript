var car = {
  id: 1,
  name: "",
  model: "S6",
  mnfDate: "01 - 01 - 2017",
  vin: "754SSHJYMNB6545",
  color: "black",
  price: 10000000,
  launchDate: "22 - 02 - 2016",
  123: "in obj num can also be a Var"
};

// accessing obj prop
var thisIsOneWay = car.name;
var OtherWay = car["color"];

// accessing number prop

var accessNumber = car["123"];
console.log(accessNumber);

// updating or changing the value of prop
// car.name = "Swift";

Object.freeze(car);
// console.log(Object.seal(car));

// console.log(Object.values(car));
console.log(car.name);

try {
  const myVar = "dlskfjsdf";
  myVar = 565;
} catch (err) {
  throw "Somthing Worng";
if (car.name == "" || car.name == null) {
  console.log("enter the value");
}

var person = { fname: "Nick", lname: "Jonas", age: 26 };
for (var x in person) {
  console.log("keys:", x);
  console.log("values:", person[x]);

  // console.log(x + ": " + person[x]);
}

console.log(JSON.stringify(person));

let set = new Set(["a", "b", "c"]);

console.log(set);
