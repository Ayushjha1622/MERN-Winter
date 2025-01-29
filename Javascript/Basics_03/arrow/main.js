const user = {
    username: "ayush",
    price: 999,

    welcomeMessage: function(){
        // console.log(`${this.username}, welcome to website`);

        // console.log(this);
        
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// function chai() {
//     let username = "ayush"   // this not applied in functions
//     console.log(this);
    
// }

// chai()'



// const chai =  () => {
//     let username = "ayush"
//     console.log(this.username);
       
// }
// chai()


// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// console.log(addTwo(3,4))


const addTwo = (num1, num2) => (num1 + num2)
console.log(addTwo(3,4));







