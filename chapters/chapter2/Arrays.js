// const companies = [
//   { name: "Company One", category: "Finance", start: 1981, end: 2004 },
//   { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
//   { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
//   { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
//   { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
//   { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
//   { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
//   { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
//   { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
// ];

// const ages = [33, 12, 20, 16, 5, 21, 44, 61, 13, 15, 45, 25, 64, 32, 54];

// 1. Remove duplicates from an array
// var fruits = ['banana', 'apple', 'orange', 'watermelon', 'apple', 'orange', 'grape', 'apple'];

// // First method
// var uniqueFruits = Array.from(new Set(fruits));
// console.log(uniqueFruits); // returns [“banana”, “apple”, “orange”, “watermelon”, “grape”]
// // Second method
// var uniqueFruits2 = [ new Set(fruits)];
// console.log(uniqueFruits2); // returns [“banana”, “apple”, “orange”, “watermelon”, “grape”]

// var tem = { ...companies } // Es 6 itterator
// console.table(tem)
// console.assert(tem)
// console.countReset(tem)

// companies.forEach(function(company) {
//   // console.log(company);
//   if (
//     company.end == "" ||
//     company.name == "" ||
//     company.category == "" ||
//     company.start == ""
//   ) {
//     return console.log("please enter the Fields");
//   } else {
//     console.table(company);
//     newCompany.push(company);
//   }
// });

// console.log(newCompany);

// companies.map((item, index) => {
//   if (Object.keys(item) == "") {
//     return console.log("dfsd");
//   } else {
//     console.log(index, item);
//   }
// });
// // to change the index value of array
// console.log(companies[3] =  { name: "Company Six", category: "Finance", start: 1987, end: 2010 })

// // Normal for loop
// //   for ( i = 0; i < companies.length; i++) {
// //     console.log(companies[i])
// //   }

// // For Each Method

// // companies.forEach(function(company) {
// //   console.log(company);
// // });

// // normal for loop filter

// for (i = 0; i < ages.length; i++) {
//   if (ages[i] <= 21) {
//     console.log(ages[i]);
//   }

// }

// // filter Method

// // ages.filter(function(ages) {
// //     if ( ages <= 21) {
// //         return true;
// //     }
// //     console.log(ages)

// // })

[1, 2, 3].map(i => 1 + 5);

// function sum (a, b) {
//   return Promise(function (resolve, reject) {
//     setTimeout(function () {                                       // send the response after 1 second
//       if (typeof a !== "number" || typeof b !== "number") {        // testing input types
//         return reject(new TypeError("Inputs must be numbers"));
//       }
//       resolve(a + b);
//     }, 1000);
//   });
// }

// var Promise = sum(10, 5);
// Promsise.then(function (result) {
//  document.write(" 10 + 5: ", result);
//  return sum(null, "foo");              // Invalid data and return another promise
// }).then(function () {                   // Won't be called because of the error
// }).catch(function (err) {               // The catch handler is called instead, after another second
//  console.error(err);                   // => Please provide two numbers to sum.
// });

// })

// if (!Object.prototype.filter) {
//   function filter(predicate) {
//     const obj = this;
//     if (!obj.__proto__ || obj.__proto__.constructor.name !== "Object") {
//       throw new Error(
//         "Connot invoke the filter method: the input is not an Object."
//       );
//     }
//     const newObj = {};
//     for (let prop in obj) {
//       if (obj.hasOwnProperty(prop) && predicate(obj[prop], prop, obj)) {
//         newObj[prop] = obj[prop];
//       }
//     }
//     return newObj;
//   }
//   Object.defineProperty(Object.prototype, 'filter', {
//     value: filter,
//     writable: true,
//     configurable: true
//   })
// }

// const greetings = {
//   a: 'Hello',
//   b: 'Hey',
//   c: 'Bye Bye'
// }

// const longGreetings = greetings.filter((configurable, key ) => configurable.length >= 5);

// console.table(longGreetings)

// var paragraph =
//   'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.';

// var words = paragraph.split(' ')

// console.log(words.length)

// var captial = /[A-Z]/g;

// console.log("Capital letters are", paragraph.match(captial));

// var small = /[a-z]/g

// var smal = paragraph.match(small)

// console.log('Small letters are: ', )

let p = ["a", "b", "c", undefined, "g", undefined];

var g = p.filter(item => {
  return item !== undefined;
});
console.log(g);
