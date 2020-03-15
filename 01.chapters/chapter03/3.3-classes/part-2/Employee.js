class Employee {
  constructor(name, age, employeeCode, email, mobile) {
    this.name = name;
    this.age = age;
    this.employeeCode = employeeCode;
    this.email = email;
    this.mobile = mobile;
  }
}
// Syntax
// class ChildClass extends ParentClass { ... }
class Address extends Employee {
  constructor(
    name,
    age,
    employeeCode,
    email,
    mobile,
    lane,
    city,
    state,
    country,
    pinCode
  ) {
    super(name, age, employeeCode, email, mobile);
    this.lane = lane;
    this.city = city;
    this.state = state;
    this.country = country;
    this.pinCode = pinCode;
  }
}

var address = new Address(
  "kiran",
  20,
  "EMP007",
  "kiran@xyz.com",
  1234567890,
  "PizzaHut lane",
  "New york",
  "new York",
  "USA",
  500078
);

console.log(address);
