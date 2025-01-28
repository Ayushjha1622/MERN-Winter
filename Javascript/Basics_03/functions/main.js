// function sayMyName() {
//     console.log("A");
//     console.log("A");
//     console.log("A");
//     console.log("A");
//     console.log("A");
//     console.log("A");
    

// }

// sayMyName()




// function addTwoNumbers(number1, number2){
//     console.log(number1+number2);
// }

// addTwoNumbers(3,4)


// function addTwoNumbers(number1, number2){
//     console.log(number1+number2);
// }

// function addTwoNumbers(number1, number2){
//     let result = number1 + number2
//     return result
// }

// const result = addTwoNumbers(3,5)
// console.log("Result: ",result);



function loginUserMessage(username) {
    if (username === undefined) {
        console.log("please enter a username");
        
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("ayush"))


function calculateCartPrice(...num1) {
    return num1
}

// console.log(calculateCartPrice(200,400,600));



// const user = {
//     username: "ayush",
//     price: 199
// }


function handleObject(anyObject) {
    // console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

// handleObject(user)

handleObject({
    username: "ayush",
    price: 199
})

const myNewArray = [200,300,400,500]

function returnSecondValue(getArray) {
    return getArray[1]
}

console.log(returnSecondValue(myNewArray))


