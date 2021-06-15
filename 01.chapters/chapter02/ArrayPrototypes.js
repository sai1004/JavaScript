let a = [1, 2, 3, 4, 5, 6, 75, 55, 3];

Array.prototype.customReverse = function () {
    let val = [];
    for (i = this.length - 1; i >= 0; i--) {
        console.log(this.length);
        val.push(this[i]);
    }
    return val;
};

console.log(a.customReverse());


