var car = {
  id: 1,
  name: "bmw",
  model: "S6",
  mnfDate: "01 - 01 - 2017",
  vin: "754SSHJYMNB6545",
  color: "black",
  price: 10000000,
  launchDate: "22 - 02 - 2016",
  123: "in obj num can also be a Var"
};
Object.freeze(car);
console.log(Object.seal(car));
car.name = "Swift";
// console.log(Object.values(car));
console.log(car.name);
