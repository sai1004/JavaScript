import { Car } from "./Car";

class Profile {
  constructor(name, email, mobile, password, dob, car = Car) {
    this.name = name;
    this.email = email;
    this.mobile = mobile;
    this.password = password;
    this.dob = dob;
    this.car = Car.getPrice();
  }

  getName() {
    return this.name;
  }
}

var profile = new Profile(
  "sam",
  "sam@gmail.com",
  +15666659854,
  "secrete",
  "01-01-01"
);

console.log(profile);

console.log(profile.getName());
