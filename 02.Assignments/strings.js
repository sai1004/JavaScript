var para = `Lorem j Lorem`;

console.log(para);

var wordCount = para.match(/ (\w+)/g).length;
var space = para.match(/(\s+)/g).length;
console.log(wordCount);
console.log(space);
