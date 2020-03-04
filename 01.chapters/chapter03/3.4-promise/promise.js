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
