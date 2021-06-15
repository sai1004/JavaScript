const companies = [
    { name: "Company One", category: "Finance", start: 1981, end: 2004 },
    { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", category: "Retail", start: 1981, end: 1989 },
];

/* """"""""""""""""""""""""Es 6 itterator""""""""""""""""""""""""" */

var company = { ...companies };

console.table(company);

/* """""""""""""""""""""""""""""""""""""""""""""""""""""""""""" */

companies.map((item, index) => {
    if (Object.keys(item) == "") {
        return console.log("dfsd");
    } else {
        console.log(index, item);
    }
});

/* """""""""""""""""""""""change the index value of array""""""""""""""""""""" */

console
    .log(
        (companies[3] = {
            name: "Company Six",
            category: "Finance",
            start: 1987,
            end: 2010,
        })
    )

    [(1, 2, 3)].map((i) => 1 + 5);

/* """""""""""""""""""" Remove duplicates from an array"""""""""""""""""""""" */

var fruits = ["banana", "apple", "orange", "watermelon", "apple", "orange", "grape", "apple"];

// First method
var uniqueFruits = Array.from(new Set(fruits));
console.log(uniqueFruits); // returns [“banana”, “apple”, “orange”, “watermelon”, “grape”]

// Second method
var uniqueFruits2 = [new Set(fruits)];
console.log(uniqueFruits2); // returns [“banana”, “apple”, “orange”, “watermelon”, “grape”]

/* """""""""""""""""""""""""""""""""""""""""""""""""""""""""""" */

let allTypeData = ["a", "b", "c", undefined, "g", undefined];

var removeUndefinedVal = allTypeData.filter((item) => {
    return item !== undefined;
});
console.log(removeUndefinedVal);

var arr = [1, 7, 3, 4];

if ([1, 2, 3].includes(arr[1])) {
    console.log("1-3");
} else if ([4, 5, 6].includes(arr[1])) {
    console.log("4-6");
} else if ([7, 8, 9].includes(arr[1])) {
    console.log("7-9");
} else if ([10, 11, 12].includes(arr[1])) {
    console.log("10-12");
} else if ([13, 14, 15].includes(arr[1])) {
    console.log("13-15");
}

 