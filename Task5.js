const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//* reduce method to calculate the sum of all even numbers in the array.
function sumEvenNumbers(arrayOfNum) {

    const summation = arrayOfNum.reduce(
        (sum, current) => {
            if (current % 2 === 0) return sum + current;
            return sum
        }, 0
    );

    return summation;
}

const result = sumEvenNumbers(numbers);
console.log(result);