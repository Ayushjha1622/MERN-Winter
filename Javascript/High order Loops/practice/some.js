// Checks if at least one element in the array satisfies a condition.
const numbers = [1, 2, 3, 4];
const hasNegative = numbers.some((item) => item < 0)
console.log(hasNegative);

const hasEven = numbers.some((num) => num % 2 === 0);
console.log(hasEven);
