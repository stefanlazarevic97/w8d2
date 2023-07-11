Array.prototype.uniq = function() {
    let uniqueArray = [];

    this.forEach(ele => {
        if (!uniqueArray.includes(ele)) {
            uniqueArray.push(ele);
        }
    })

    return uniqueArray;
};

// console.log([1, 2, 2, 3, 3, 3].uniq()) => [1,2,3]

Array.prototype.twoSum = function() {
    let pairs = [];

    for (let i = 0; i < this.length; i++) {
        for(let j = 0; j < this.length; j++) {
            if (this[i] + this[j] === 0 && i < j) {
                pairs.push([i, j]);
            }
        }
    }

    return pairs;
};

// Linear time-complexity solution:

// Array.prototype.twoSum = function () {
//     let arrayKeys = {};
//     let zeroPairs = [];

//     for (let i = 0; i < this.length; i++) {
//         const currentEle = this[i];
//         const targetVal = arrayKeys[0 - currentEle];

//         if (arrayKeys[currentEle] === true) {
//             continue;
//         }
//         if (targetVal === true) {
//             zeroPairs.push([0 - currentEle, currentEle]);
//         }
//         arrayKeys[currentEle] = true;
//     }

//     return zeroPairs;
// }

// console.log([-1, 0, 2, -2, 1].twoSum()) // => [[0,4] [2,3]]

Array.prototype.transpose = function() {
    let transposedArray = [];
    let tempRow = [];

    for (let i = 0; i < this.length; i++) {
        for (let j = 0; j < this.length; j++) {
            tempRow.push(this[j][i]);
        }

        transposedArray.push(tempRow);
        tempRow = [];
    }

    return transposedArray;
};

// console.log([[0, 1, 2], [3, 4, 5], [6, 7, 8]].transpose()) // => [[0,3,6], [1,4,7], [2,5,8]]