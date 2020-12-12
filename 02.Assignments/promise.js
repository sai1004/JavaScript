/* --------------------------------------------------------- */

function promiseExample(a, b) {
    let promise = new Promise((resolve, reject) => {
        if (a == b) {
            resolve();
        } else {
            reject();
        }
    });

    promise
        .then(() => {
            console.log("Success, x == y is: True ");
        })
        .catch(() => {
            console.log("Some error has occured  x == y is: Not True ");
        });
}

console.log(promiseExample(10, 10));
