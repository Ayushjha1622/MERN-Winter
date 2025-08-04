// const promiseOne = new Promise(function(resolve, reject){
//     // Do an async task
//     //db tasks, cryptography, network

//     setTimeout(function(){
//         console.log('Async task is complete');
//         resolve()
//     },1000)
// })


// promiseOne.then(function(){
//     console.log('promise consumed');
    
// })


// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log('async task 2');
//         resolve()
        
//     },1000)
// }).then(function(){
//     console.log('async 2 resolved')
// })


// const promiseThree = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve({username: "ayush",email: "abc@gmail.com"})
//     },1000) 
// })

// promiseThree.then(function(user){
//     console.log(user);
    
// })



// const promiseFour = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error = true
//         if(!error){
//             resolve({username: "ayush",email: "abc@gmail.com",password: "12345"})
//         else{
//             reject("Error")
//         }
//     },1000)
// })

// promiseFour.then((user) => {
//     console.log(user);
//     return user.username 
// }).then((username) => {
//     console.log(username);
    
// }).catch(function(error){
//     console.log(error);
    
// }).finally(() => console.log("the promise is either resolved or either rejected");
// )



// const promiseFive = new Promise(function(resolve,reject){
//     setTimeout(function(){
//                 let error = true
//                 if(!error){
//                     resolve({username: "ayush",email: "abc@gmail.com",password: "12345"})
//                 }else{
//                     reject("Error")
//                 }
//             },1000)
// })


// async function consumePromiseFive() {

//     try {
//         const response = await promiseFive
//         console.log(response);
//     } catch (error) {
//         console.log("error");
        
//     }
   
    
// }

// consumePromiseFive()

// async function getAllUsers() {
//    try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data = await response.json()
//     console.log(data);
//    } catch (error) {
//     console.log("error");
    
//    }
    
// }
// getAllUsers()


// fetch('https://jsonplaceholder.typicode.com/users')
// .then((response) => {
//     return response.json()
// })
// .then((data) => {
//     console.log(data);
    
// }).catch((error) => console.log(error)
// )


// let firstPromise = new Promise((resolve, reject) => {
//     setTimeout(function sayMyName(){
//     console.log("ayush jha");
    
// }, 5000)
    
// });


// let promise1 = new Promise((resolve, reject) => {
//     let success = true;
//     if(success){
//         resolve("Promise 1 resolved");
//         }
//         else{
//             reject("Promise 1 rejected");
//             }
// });


// promise1.then((message) => {
//     console.log("my messagew is : " + message);
// }).catch((error) => {
//     console.log("Error: " + error);
    
// })

let promise1 = new Promise((resolve),(reject) => {
    setTimeout(resolve, 1000, "First");

})
let promise2= new Promise((resolve),(reject) => {
    setTimeout(resolve, 2000,"First");

})
let promise3= new Promise((resolve),(reject) => {
    setTimeout(resolve, 4000,"First");

})

Promise.all([ promise1,promise2,promise3])
.then((values) => {
    console.log(values);
    })

.catch((Error) => {
    console.log(Error);
})