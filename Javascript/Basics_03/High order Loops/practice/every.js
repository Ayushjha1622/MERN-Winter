const numbers = [2, 4, 6, 8];
const allEven = numbers.every((num) => num % 2 === 0);
console.log(allEven); // true

const allGreaterThanTen = numbers.every((num) => num > 10);
console.log(allGreaterThanTen);