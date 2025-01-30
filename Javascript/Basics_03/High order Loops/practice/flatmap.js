// Combines map and flat into one operation. It maps each element to a new array and flattens the result.
const sentences = ['Hello world', 'Goodbye world'];
const words = sentences.flatMap((sentence) => sentence.split(' '));
console.log(words); 