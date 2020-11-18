try {
    throw new Error("human-readable error message To Print!");
} catch (error) {
    console.log("Somthing Went Wrong! ", error.message); // calling error message
}

/* '''''''''''''''''''''''''''''''''''''' */

try {
    const myVar = "dlskfjsdf";
    // myVar = 565; // const value cannot be changed. it throws error
} catch (err) {
    throw "Somthing Worng";
}

/* '''''''''''''''''''''''''''''''''''''' */

function add(a, b) {
    return a + b;
}

function myPerfomanceCriticalFunction() {
    try {
        return add(2, 4);
    } catch (e) {
        console.log(e);
    }
}
console.log(myPerfomanceCriticalFunction());

/* '''''''''''''''''''''''''''''''''''''' */

function undef(c, d) {
    return c + d;
}

try {
    console.log(undef(4, 8));
} catch (error) {
    console.log("An error occurred!", error);
} finally {
    console.log("The code-block has finished");
}

/* '''''''''''''''''''''''''''''''''''''' */

// async function main(){
//   try {
//     await
//   } catch {

//   }
// }

/* '''''''''''''''''''''''''''''''''''''' */

try {
    throw new TypeError();
} catch (err) {
    if (err instanceof Error) {
        console.log("instance of general Error Constructor");
    }
    if (err instanceof TypeError) {
        console.log("Type Error");
    }
}
