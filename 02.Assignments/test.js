var callbak;

// console.log(callbak);

const setValue = () => {
    callbak = "Value is given after Specified Time";
    console.log(callbak);
};

// setTimeout(setValue, 2000);

/* --------------------------------------------------------              -------------------------------------------------------------- */

var x = 12;

var y = 12;

var promise = new Promise((resolve, reject) => {
    if (x == y) {
        resolve(true);
    } else {
        let err = new Error("X is Not Equal To Y");
        reject(err);
    }
});

function promisify() {
    var data = promise
        .then((data) => {
            console.log("data", data);
        })
        .catch((error) => {
            console.log(error);
        });

    console.log(data);
}

// promisify();

/* -------------------------------------------------------------------------------------- */

function fibonocci(end) {
    // program to generate fibonacci series up to a certain number

    // take input from the user
    const number = parseInt(end);
    let n1 = 0,
        n2 = 1,
        nextTerm;

    console.log("Fibonacci Series:");
    console.log(n1); // print 0
    console.log(n2); // print 1

    nextTerm = n1 + n2;

    while (nextTerm <= number) {
        // print the next term
        console.log(nextTerm);

        n1 = n2;
        n2 = nextTerm;
        nextTerm = n1 + n2;
    }
}

// console.log(fibonocci(10));

// -------------------------------------

var fibonacci_series = function (n) {
    if (n === 1) {
        return [0, 1];
    } else {
        var s = fibonacci_series(n - 1);
        s.push(s[s.length - 1] + s[s.length - 2]);
        return s;
    }
};

console.log(fibonacci_series(8));

var obj1 = {
    x: 43,
    y: "Hello world!",
    z: function () {
        let self = this;
        console.log("name is:", obj1.x);
        console.log("name is:", this.x);
        console.log("name is:", self.x);
    },
};

// console.log(obj1.z());

// var symobol1 = Symbol("This is a Symbol!!");
// console.log(symobol1);
