let list = [1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 13, 15, 17];

// converting array to string
// console.log(list.toString());

let evenList = [];

list.forEach((item) => {
    if (item % 2 == 0) {
        evenList.push(item);
    }
});
// console.log(evenList);

let maxOfList = Math.max(...evenList);

// console.log(maxOfList);

let minOfList = Math.min(...evenList);

// console.log(minOfList);

const reducer = (accumlator, currentValue) => accumlator + currentValue;
let sumOfList = list.reduce(reducer);

// console.log(sumOfList);

function findInterSection(input) {
    const [firstList, secondList] = input.map((s) => s.split(", "));

    const resultMap = {};
    const result = [];

    for (const number of firstList) {
        resultMap[number] = true;
    }

    for (const number of secondList) {
        if (resultMap[number]) {
            result.push(number);
        }
    }

    return result.length ? result.join(",") : false;
}

var arr = ["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"];

// console.log(findInterSection(arr));

const countries = [
    {
        id: "IN",
        code: "IN",
        name: "India",
        lang: [
            {
                id: "en_hi",
                name: "Hindi",
                name_local: "हिन्दी",
                active: true,
            },
        ],
    },
    {
        id: "AE",
        code: "AE",
        name: "United Arab Emirates",
        lang: [
            {
                id: "ar-AE",
                name: "Arabic",
                name_local: "عربى",
                active: true,
            },
        ],
    },
];

function findDataById(item, id) {
    try {
        let returnVal = {};
        item.forEach((ele) => {
            returnVal[ele.id] = { code: ele.code, name: ele.name, lang: JSON.stringify(ele.lang) };
        });
        // console.log(returnVal[`${id}`]);
        return returnVal[`${id}`];
    } catch (err) {
        throw err;
    }
}

console.log(findDataById(countries, "AE"));

const someArray = [
    {
        name: "kiara",
        age: 25,
    },
    {
        name: "miller",
        age: 25,
    },
    {
        name: "John",
        age: 25,
    },
];

const [key] = someArray;

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
