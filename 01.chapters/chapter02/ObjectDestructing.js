const arr = [
    {
        name: "john",
        age: 23,
        gender: "male",
    },
    {
        name: "dep",
        age: 35,
        gender: "male",
    },
    {
        name: "lisa",
        age: 34,
        gender: "female",
    },
];

const [key] = arr;

key.name = "over  writted";

console.log(key.name);

/*-------- Object Destructing ------------- */

const person = {
    name: "SK",
    // name: "SK",
    dog: {
        name: "Razzer",
    },
    snack: "Pizza",
    drink: "Water",
};

// old way
// const name = person.name;
// const snack = person.snack;

// new way

// const { name, snack } = person;

// console.log(name); // SK
// console.log(snack); // Pizza

// when a property is undefined
// can declare at init time
// const { name = "SK", snack } = person

// rename a var from obj Destruction

const { name: myName, snack } = person;

console.log(myName); // SK
console.log(snack); // Pizza

// const { name: myName = "If There is No value in name", snack } = person;
