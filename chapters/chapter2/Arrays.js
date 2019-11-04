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
var fruits = ['banana', 'apple', 'orange', 'watermelon', 'apple', 'orange', 'grape', 'apple'];

// First method
var uniqueFruits = Array.from(new Set(fruits));
console.log(uniqueFruits); // returns [“banana”, “apple”, “orange”, “watermelon”, “grape”]
// Second method
var uniqueFruits2 = [ new Set(fruits)];
console.log(uniqueFruits2); // returns [“banana”, “apple”, “orange”, “watermelon”, “grape”]



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

