// Returns the index of the first element that satisfies a condition.


const numbers = [1, 2, 3, 4, 5];
const firstEvenIndex = numbers.findIndex((num) => num % 2 === 0);
console.log(firstEvenIndex);