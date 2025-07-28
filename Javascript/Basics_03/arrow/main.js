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

//  greet

const greet = (name) => {
  console.log(`hello ${name}`)
}

// greet("ayush")
//  mul
const mul = (a,b) => {
  return a*b
}

// console.log(mul(3,4))



// implicit
const div = (x,y) => x /y;
// console.log(div(3,4))

//  map
const n = [1,2,3,4];
const d = n.map(num => num*2);
// console.log(d)

// filter
const s = [2,4,6,8,10, 11,14];
const even = s.filter(nums => nums %2 === 0);
console.log(even)

//  reduce
const total = s.reduce((sum,price) => sum + price,0);
console.log(total)










