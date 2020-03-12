import { Profile } from "./Profile";

class Employee extends Profile {
  constructor(name, age, employeeCode) {
    super(name, age);
    this.employeeCode = employeeCode;
  }
}
