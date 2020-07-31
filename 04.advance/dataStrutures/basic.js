/* !!!!!!!!!!!!!!!!!!!!! algorithm printing numbers from 0 to n-1 !!!!!!!!!!!!!!!!!!!! */

/* """""""" Big Notation O(n) A Simple Linear algorithm is printing numbers from 0 to n-1 """""""""" */

function exampleLinear(n) {
   for (let i = 0; i < n; i++) {
      console.log(i);
   }
}

// exampleLinear(10);

/* """""""""""""" Similarly, O(n)2 is quadratic time """""""""""""""" */

function quadratic(n) {
   for (let i = 0; i < n; i++) {
      console.log("this is 1st", i);
      for (let j = i; j < n; j++) {
         console.log("this is 2nd", j);
      }
   }
}

// quadratic(15);

/* """""""""""""" O(n)3 is cubic time. """""""""""""" */

function cubic(n) {
   for (let i = 0; i < n; i++) {
      console.log("this is i: ", i);
      for (let j = i; j < n; j++) {
         console.log("this is square of i:", j);
         for (let k = j; k < n; k++) {
            console.log("this is {cube} of i:", k);
         }
      }
   }
}

cubic(10);
