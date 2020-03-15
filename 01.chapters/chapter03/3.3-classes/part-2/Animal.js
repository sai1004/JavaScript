// Syntax
// class ChildClass extends ParentClass { ... }

class Animal {
  constructor(speed) {
    this.speed = speed;
  }
}

class Wolf extends Animal {
  constructor(speed, color) {
    super(speed); // getting attribute of extended class
    this.color = color;
  }
}

const wolfOne = new Wolf(80, "gray");
console.log(wolfOne);
console.log(wolfOne.speed);
