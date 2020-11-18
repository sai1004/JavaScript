/* --------  Converting to boolean using !! operator -------- */

function Account(cash) {
    this.cash = cash;
    this.hasMoney = !!cash;
}

var account = new Account(100.55);

console.log(account.cash); // 100.50
console.log(account.hasMoney); // true

var emptyAccount = new Account(0);
console.log(emptyAccount.cash); // 0
console.log(emptyAccount.hasMoney); // false

/********* Converting to number using + operator **********/

function toNumber(strToNumber) {
    return +strToNumber;
}

console.log(toNumber("124"));
console.log(toNumber("ABC"));

console.log(+new Date());
