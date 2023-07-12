function range(start, end) {
    if (end < start) {
        return [];
    } else {
        const numbers = range(start, end - 1);
        numbers.push(end);
        return numbers;
    }
}

// console.log(range(3, 7)) // => [3, 4, 5, 6, 7]
// console.log(range(1, 1)) // => [1]
// console.log(range(4, 2)) // => []

function sumRec(array) {
    if (array.length === 0) {
        return 0;
    } else {
        return array[0] + sumRec(array.slice(1));
    }
}

// console.log(sumRec([5, 18, -3, 7, -1])) // => 26
// console.log(sumRec([-6])) // => -6
// console.log(sumRec([])) // => 0

function exponent(base, exp) {
    if (exp === 0) {
        return 1;
    }

    return base * exponent(base, exp - 1);
}

// console.log(exponent(4, 2)) // => 16
// console.log(exponent(2, 5)) // => 32
// console.log(exponent(1, 0)) // => 1

function fibonacci(n) {
    if (n === 1) {
        return [0];
    } else if (n === 2) {
        return [0, 1];
    } else {
        let fibArray = fibonacci(n - 1);
        fibArray.push(fibArray[fibArray.length - 1] + fibArray[fibArray.length - 2]);
        return fibArray;
    }
}

// console.log(fibonacci(6)) // => [0, 1, 1, 2, 3, 5]
// console.log(fibonacci(2)) // => [0, 1]
// console.log(fibonacci(1)) // => [0]