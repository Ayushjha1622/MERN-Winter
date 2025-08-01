// const descriptor = Object.getOwnPropertyDescriptor(Math,"PI")

// const { use } = require("react");

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

// const user = {name: "Ayush", age: 15};
// const clone = {...user};

// clone.name = "avi_j";
// console.log(user.name);
// console.log(clone.name);

// const target = {a:1}
// const source = {b:2, c:3}
// console.log(Object.assign(target,source));


// const person = {
//     greet(){
//         console.log(`Hello, my name is ${this.name}`);
//     }
// };

// const s = Object.create(person)
// s.name = "Ayush"
// s.greet()


// const user = { name: "Ayush", age: 23 };
// console.log(Object.entries(user));
// // [ [ 'name', 'Ayush' ], [ 'age', 23 ] ]


const entries = [['name','ayush'],['age',23]];
const obj = Object.fromEntries(entries);
console.log(obj);