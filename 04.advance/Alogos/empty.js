function guessGame(n) {
    let val = 0;

    if (n == Math.floor(Math.random() * 6)) {
        val = "Match ";
    } else {
        val = "Not Match";
    }

    // console.log(Math.floor(Math.random() * 100));

    return val;
}

console.log(guessGame(10));


function pyStr(str) {

    if (str.startsWith("Py")) {
        console.log(str)
    } else {
        console.log("Nooooooooooo")    
    }

}

console.log(pyStr("Py string"))
console.log(pyStr("Hello world"))