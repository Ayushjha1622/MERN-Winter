// Reduces an array to a single value by accumulating results.



// const numbers = [1,2,3,4,5]

// const sum = numbers.reduce((acc,curr) => acc + curr,0);
// console.log(sum);



const cart = [
    { item: 'apple', price: 1.5 },
    { item: 'banana', price: 0.5 },
    { item: 'orange', price: 2 },
  ];

const total = cart.reduce((total,item) => total + item.price,0)
console.log(total);

