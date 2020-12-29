let myVar = undefined; // exe First

// console.log("myVar", myVar);

function resolveAfter1Second() {
    return new Promise((resolve) => {
        setTimeout(() => {
            myVar = "got Some Value By Call Back!!";
            // console.log("myVar", myVar); // exe Third after 1 sec
            resolve(myVar);
        }, 1000);
    });
}

// console.log("myVar", myVar); // exe Second

async function asyncHandler() {
    let val = await resolveAfter1Second();

    const promise = new Promise((resolve, reject) => {
        if (val) {
            resolve(val);
        } else {
            reject(new Error("Rejected"));
        }
    });

    promise
        .then((data) => {
            console.log("resolved", data);
        })
        .catch((err) => {
            console.log("err", err);
        });
}

console.log(asyncHandler());

function resolveAfter2Seconds() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("resolved");
        }, 2000);
    });
}

async function asyncCall() {
    console.log("calling");
    const result = await resolveAfter2Seconds();
    console.log(result);
    console.log("I will be executed After the result of await func");
    // expected output: 'resolved'
}

asyncCall();
