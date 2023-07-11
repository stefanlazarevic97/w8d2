Array.prototype.bubbleSort = function() {
    array = this.slice();
    let sorted = false;

    while(!sorted) {
        sorted = true;

        array.forEach( (ele, i) => {
            if (ele > array[i + 1]) {
                [array[i], array[i + 1]] = [array[i + 1], array[i]];

                sorted = false;
            }
        })
    }

    return array;
};

// console.log([3, 1, -5, 0, -2, 9, 4].bubbleSort()) // => [-5, -2, 0, 1, 3, 4, 9]

String.prototype.substrings = function() {
    let substrings = [];

    for (let i = 0; i < this.length; i++) {
        for (let j = i + 1; j <= this.length; j++) {
            substrings.push(this.slice(i, j));
        }
    }

    return substrings;
};

// console.log("Hello".substrings()) // => ["H", "He", "Hel", "Hell", "Hello", "e", "el", "ell", "ello", "l", "ll", "llo", "l", "lo", "o"]