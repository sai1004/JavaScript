//JavaScript Object Spread

let colors = ["red", "green", "blue"];

let rgb = [...colors];

console.log(rgb);

let cmyk = ["cyan", "magenta", "yellow", "black"];

let merge = [...rgb, ...cmyk];

console.log(merge);

