Array.prototype.foo = () => {
    let c = []
    for (let i = this.length; i < 0 ; i--) {
        console.log(this[i])
        c.push(this[i])
    }
    return c
};

let a = [1, 2, 3, 4, 5, 6, 75, 55, 3];


console.log(a.foo())