let myVar = undefined; // exe First

// console.log("myVar", myVar);

setTimeout(() => {
    myVar = "got Some Value By Call Back!!";
    console.log("myVar", myVar); // exe Third after 1 sec
}, 1000);

// console.log("myVar", myVar); // exe Second


/* ------------------------------------------------------------------------------------------------- */

let exeAfter20Secs = () => {
    console.log(" I've executed after 20 seconds! ");
};

setTimeout(exeAfter20Secs, 20000);

/* 
    this is main thred,
    callback is executed after the main thred is been executed 
*/
console.log("i've executed without blocking, i'm main thred");

/* ------------------------------------------------------------------------------------------------- */

const callback = (string, callback) => {
    console.log("iam string as a param >>", string);
    setTimeout(() => {
        callback();
    }, 10000);
};

console.log(
    callback("im arg to string", function () {
        console.log("i've executed as callback");
        return "Some value";
    })
);

/* ------------------------------------callback hell-------------------------------------------------- */

setTimeout(() => {
    console.log("callback 1");
    setTimeout(() => {
        console.log("callback 2");
        setTimeout(() => {
            console.log("callback goes on... callback hell");
        }, 25000);
    }, 20000);
}, 10000);
