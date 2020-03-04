// var para = `Lorem j Lorem`;

// console.log(para);

// var wordCount = para.match(/ (\w+)/g).length;
// var space = para.match(/(\s+)/g).length;
// console.log(wordCount);
// console.log(space);

var task = "httpgooglecom";

let part = task.replace("p", "p://").replace("e", "e.");

console.log(part);

// o/p: http://google.com

var promise = new Promise(function(resolve, reject) {
  const x = 888;
  const y = 88;

  if (x == y) {
    resolve();
  } else {
    reject();
  }
});

promise
  .then(function() {
    console.log("x == y is: True ");
  })
  .catch(function() {
    console.log(" x == y is: Not True ");
  });
