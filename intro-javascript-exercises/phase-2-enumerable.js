Array.prototype.myEach = function(callback) {
    for(let i = 0; i < this.length; i++) {
        (callback(this[i]));
    }
};

// ([1, 2, 3].myEach(ele => console.log(2 * ele))) // => 2, 4, 6

Array.prototype.myMap = function(callback) {
    let mapped = [];

    this.myEach(function(ele) {
        mapped.push(callback(ele));
    })

    console.log(mapped);
};

// [1, 2, 3].myMap(ele => 2 * ele) // => [2, 4, 6]

Array.prototype.myReduce = function(callback, initialValue) {
    let array = this;

    if (!initialValue) {
        initialValue = this[0];
        array = array.slice(1);
    }

    let result = initialValue;

    array.myEach(function(ele) {
        result = callback(result, ele)
    });

    console.log(result);
};

// [1, 2, 3].myReduce(function (acc, el) {
//     return acc + el;
// }); // => 6

// [1, 2, 3].myReduce(function(acc, el) {
//     return acc + el;
// }, 25); // => 31