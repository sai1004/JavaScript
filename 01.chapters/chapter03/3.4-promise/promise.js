/* """""""""""""""""""""""""""""""""""""""""""""""""""""""""""" */

var promise = new Promise(function (resolve, reject) {
   const x = 12;
   const y = 12;
   if (x === y) {
      resolve();
   } else {
      reject();
   }
});

promise
   .then(function () {
      console.log("Success, x == y is: True ");
   })
   .catch(function () {
      console.log("Some error has occured  x == y is: Not True ");
   });

/* """""""""""""""""""""""""""""""""""""""""""""""""""""""""""" */
function sum(a, b) {
   return new Promise((resolve, reject) => {
      setTimeout(() => {
         if (typeof a !== "number" || typeof b !== "number") {
            return reject(new Error("Type Error: Inputs Must Be Number"));
         }
         resolve(a + b);
      }, 2000);
   });
}

sum(2, 2).then((data) => {
   console.log(data);
});
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Sync Code example

// function someStuff() {
//   console.log("i am from the function");
//   console.log("Do Some Stuff");
// }

// console.log("start");

// someStuff();

// console.log("End");

// Async Code

// console.log("start");

// setTimeout(() => {
//   console.log("We are in The Time Out!");
// }, 2000);

// console.log("End");

// var x = 5;

// var y = 5;

// var promise = new Promise((resolve, reject) => {
//   if (x == y) {
//     resolve("true");
//   } else {
//     reject(new Error("X is Not Equals To Y"));
//   }
// });

// promise
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// const youTube = new Promise((resolve) => {
//   setTimeout(() => {
//     console.log("getting stuff from YouTube");
//     resolve({ videos: [1, 2, 3, 4, 5, 6] });
//   }, 2000);
// });

// const faceBook = new Promise((resolve) => {
//   setTimeout(() => {
//     console.log("stuff From FaceBook");
//     resolve(
//       "done"
//     );
//   }, 2000);
// });

// Promise.all([youTube, faceBook]).then((result) => console.log(result));

const yt = () => {
   console.log("getting stuff from YouTube");
   return { videos: [1, 2, 3, 4, 5, 6] };
};

const fb = () => {
   console.log("getting stuff from fb");
   return { user: "name" };
};

async function asinkStuff() {
   try {
      let youTube = await yt();

      console.log(youTube);

      let faceBook = await fb();

      console.log(faceBook);
   } catch (err) {
      throw err;
   }
}

asinkStuff();

// https://javascript.info/promise-basics
