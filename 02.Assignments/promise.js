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



async function scan() {
    let str = "Hello Friend!!";

    console.log(str);
    await sleep(2000);
    console.log("Scaning for target");
    await sleep(3000);
    console.log("Target Identified IP: 192.168.1.10");
    await sleep(4000);
    console.log("Scaning for vulnerablities");
    await sleep(4000);
    console.log("SSH Opened on Port: 22");
    await sleep(4000);
    console.log("Initiating Brutforce Attack")
    await sleep(4000);
    console.log("ssh root@192.168.1.10 admin2")
    await sleep(1000);
    console.log("ssh root@192.168.1.10 user2")
    await sleep(1000);
    console.log("ssh root@192.168.1.10 user1")
    await sleep(1000);
    console.log("ssh root@192.168.1.10 super")
    await sleep(1000);
    console.log("ssh root@192.168.1.10 qwerty")
    await sleep(1000);
    console.log("ssh root@192.168.1.10 password")
    await sleep(1000)
    console.log("Found password : super")
    await sleep(1000)
    console.log("shuting down system!!")
    await sleep(1000)
    console.log("sudo shutdown now")

}

scan();

function sleep(secs) {
    return new Promise((resolve, reject )=>{
        setTimeout(() => {
        resolve()
        }, secs);
    })
}
