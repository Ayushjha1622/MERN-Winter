// const descriptor = Object.getOwnPropertyDescriptor(Math,"PI")

// console.log(descriptor);


// const chai = {
//     name: "ginger-tea",
//     price: 250,
//     isAvailable: true
// } 

// console.log(Object.getOwnPropertyDescriptor(chai, "price"));

// Object.defineProperty(chai, "name",{
//     writable: false,
//     enumerable: false
// })

// console.log(Object.getOwnPropertyDescriptor(chai,"name"));


// for (const [key,value] of Object.entries(chai)) {
//     console.log(`${key} : ${value}`);
    
// }

const user = {name: "Ayush", age: 15};
const clone = {...user};

clone.name = "avi_j";
console.log(user.name);
console.log(clone.name);

