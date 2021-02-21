/* Async Await Simple Example to Understand */

function doA() {
    setTimeout(() => {
        console.log("3 seconds passed!");
    }, 3000);
}

function doB() {
    setTimeout(() => {
        console.log("9 seconds passed!");
    }, 7000);
}

async function doAll() {
    await doA();

    await doB();
}

console.log(doAll());

/* """""""""""""""""""""""""""""""""""""""""""""""""""""""""""" */

function asyncFunc(work) {
    return new Promise(function (resolve, reject) {
        if (work === "") {
            reject(Error("Nothing"));
            setTimeout(() => {
                resolve(work);
            }, 1000);
        }
    });
}

asyncFunc("work 1")
    .then(
        // task 1
        function (result) {
            console.log(result);
            return asyncFunc("work 2"); // task 2
        },
        function (error) {
            console.log(error);
        }
    )
    .then(
        function (result) {
            console.log(result);
        },
        function (error) {
            console.log(error);
        }
    );
console.log("END");

/* work 1 and 2 is done in asynchronously  */
