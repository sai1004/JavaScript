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

console.log(fibonacci_series(8));
