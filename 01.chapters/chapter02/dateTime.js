var date = new Date();

var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

console.log(date.getDate());

console.log(date.getMonth());

console.log(date.getFullYear());

console.log(date.getDate() + "-" + date.getMonth() + "-" + date.getFullYear());

console.log(months[date.getMonth()]);

const timeInMinutes = 1;
const currentTime = Date.parse(new Date());
const deadline = new Date(currentTime + timeInMinutes * 60 * 1000);

console.log(deadline);
