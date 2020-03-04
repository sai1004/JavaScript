/* """""""""""""""""""""""""""""""""""""""""""""""""""""""""""" */

var promise = new Promise(function(resolve, reject) {
  const x = 12;
  const y = 12;
  if (x === y) {
    resolve();
  } else {
    reject();
  }
});

promise
  .then(function() {
    console.log("Success, x == y is: True ");
  })
  .catch(function() {
    console.log("Some error has occured  x == y is: Not True ");
  });

/* """""""""""""""""""""""""""""""""""""""""""""""""""""""""""" */
function sum(a, b) {
  return Promise(function(resolve, reject) {
    setTimeout(function() {
      // send the response after 1 second
      if (typeof a !== "number" || typeof b !== "number") {
        // testing input types
        return reject(new TypeError("Inputs must be numbers"));
      }
      resolve(a + b);
    }, 1000);
  });
}

// https://javascript.info/promise-basics