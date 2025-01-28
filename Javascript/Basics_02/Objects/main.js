//object literals

const JsUser = {
    name: "Ayush",
    age: 18,
    location: "phagwara",
    email: "ayush@abc.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]

}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser.age);


// JsUser.email = "anshu@gmail.com"
// console.log(JsUser);


// Object.freeze(JsUser)
// JsUser.email = "ayush@xyz.com"
// console.log(JsUser);

JsUser.greeting = function () {
    console.log("hello js user");
    
}
JsUser.greetingTwo = function () {
    console.log(`hello js user, ${this.name}`);
    
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());


