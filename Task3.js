function square(x) {
    return x * x;
}

function double(x) {
    return x * 2;
}

function add5(x) {
    return x + 5;
}

//* Compose all the functions
function composedFunction(x) {
    const squareNum = square(x);
    const doubleNum = double(squareNum);
    const add5Num = add5(doubleNum);
    return add5Num;
}

const result = composedFunction(2);
console.log(result);
