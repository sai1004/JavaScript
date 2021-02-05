let myVar = undefined; // exe First

// console.log("myVar", myVar);

setTimeout(() => {
    myVar = "got Some Value By Call Back!!";
    console.log("myVar", myVar); // exe Third after 1 sec
}, 1000);

// console.log("myVar", myVar); // exe Second


