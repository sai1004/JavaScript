class Profile {
   constructor(name, age) {
      this.name = name;
      this.age = age;
   }
}
class Employee extends Profile {
   constructor(name, age, employeeCode) {
      super(name, age);
      this.employeeCode = employeeCode;
   }
}

employeeOne = new Employee("jimmy", 25, "TECH789");
console.log(employeeOne);
