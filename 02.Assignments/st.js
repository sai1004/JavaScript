const a = [12, 10, 29, 1, 20, 21];

function splitArray(arr) {
    let splitedArray = [];
    arr.forEach((element, index) => {
        if (index % 2 == 1) {
            splitedArray.push([arr[index - 1], element]);
        }
    });
    return splitedArray;
}

// console.log(...splitArray(a));

function sumOfArray(arr) {
    let returnVal = arr.reduce((sum, currentValue) => {
        return sum + currentValue;
    });

    return returnVal;
}

// console.log(sumOfArray(a));

function checkNequalsTo(arr) {
    let items = [];

    let n = 30;

    arr.forEach((itter1, i) => {
        arr.forEach((itter2, j) => {
            if (itter1 + itter2 == n) {
                items.push([itter1, itter2]);
            }
        });
    });
    return items;
}
// console.log(...checkNequalsTo(a));

// const a = [12, 10, 29, 1, 20, 21];

function sortArray(arr) {
    const arr2 = [];
    let pos = 0,
        max = arr[0],
        min = arr[0];

    for (let j = 0; j < arr.length; j++) {
        if (max > arr[j]) {
            max = arr[j];
        }
    }

    for (let i = 0; i < arr.length; i++) {
        for (let k = 0; k < arr.length; k++) {
            if (arr[k] != null) {
                if (min > arr[k]) {
                    min = arr[k];
                    pos = k;
                }
            }
        }
        arr2[i] = min;
        arr[pos] = null;
        min = max;
    }
    return arr2;
}

// console.log(sortArray(a));
