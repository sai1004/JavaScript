/*
    1. prototype inheritance
    2. class inheritance
    
    https://javascript.info/class-inheritance

*/

/* --------- prototype inheritance --------- */

function Person(firstName, lastName) {
    this.FirstName = firstName || "unknown";
    this.lastName = lastName || "unknown";
}

Person.prototype.getFullName = function () {
    return this.FirstName + " " + this.lastName;
};

let person1 = new Person("John", "wick");

console.log(person1.getFullName());

// ----------------------------------------------------------

function Student(firstName, lastName, schoolName, grade) {
    Person.call(this, firstName, lastName);

    this.schoolName = schoolName;
    this.grade = grade;
}

Student.prototype = new Person();

Student.prototype.constructor = Student;

let std = new Student("Sam", "Wills", "High School", "6th");

console.log(std);

/* --------- class inheritance --------- */

class Animal {
    constructor(name) {
        this.speed = 0;
        this.name = name;
    }

    run(speed) {
        this.speed = speed;
        return `${this.name} runs with speed ${this.speed}.`;
    }

    stop() {
        this.speed = 0;
        console.log(`${this.name} stands still.`);
    }
}

let animal1 = new Animal("tiger");

console.log(animal1);
console.log(animal1.run(5));
console.log(animal1.stop());

class Rabbit extends Animal {
    hide() {
        console.log(`${this.name} hides!`);
    }

    stopAnimal() {
        super.stop(); // calling method from super class / parent
        this.hide();
    }
}

let rabbit = new Rabbit("White Rabbit");

console.log(rabbit);
console.log(rabbit.hide());
console.log(rabbit.run(6));
console.log(rabbit.stopAnimal());

class Snake extends Animal {
    // constructor() {
    //     super(); // call super if using constructor
    //     console.log("Snake Class Init");
    // }
}

let snake = new Snake("black Snake");

console.log(snake);
console.log(snake.run(12));
