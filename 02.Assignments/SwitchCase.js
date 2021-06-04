// var str = "";
// var monitorInchSize = 24;
// switch (monitorInchSize) {
//     case 15:
//         str = "too small";
//         break;
//     case 16:
//     case 17:
//     case 18:
//         str = "good for the past decade";
//         break;
//     case 19:
//     case 20:
//     case 21:
//     case 22:
//     case 23:
//         str = "for office work";
//         break;
//     case 24:
//     case 25:
//     case 26:
//     case 27:
//         str = "great choice";
//         break;
//     default:
//         str = "";
//         break;
// }

var fibonacci_series = function (n) {
    if (n === 1) {
        return [0, 1];
    } else {
        var s = fibonacci_series(n - 1);
        s.push(s[s.length - 1] + s[s.length - 2]);
        return s;
    }
};

// console.log(fibonacci_series(8));

let str = "aaaabbbccccddde";

function runLengthEncode(str) {
    let newStr = "";

    let num = 1;

    for (let i = 0; i < str.length; i++) {
        if (str[i] == str[i + 1]) {
            num++;
        } else {
            newStr = newStr + num + str[i];
            num = 1;
        }
    }

    return newStr;
}

// console.log(runLengthEncode(str));

function twoSum(nums, target) {
    let res = []; // this will store our result
    for (let i = 0; i < nums.length; i++) {
        // here we are looping through the array
        for (let j = i + 1; j < nums.length; j++) {
            // here also, looping through the array but leaving the first element
            if (nums[i] + nums[j] === target) {
                res.push(i);
                res.push(j);
            }
        }
    }
    return res;
}
// [1,2,3,5] // 4
// [0,2]
console.log(twoSum([1, 2, 3, 5], 6));
