const user = {
    username: "ayush",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log("got user details");
        // console.log(this.username);
        console.log(this);
        
        
        
    }

}

// console.log(user.username);
// console.log(user.getUserDetails());



function User(username,loginCount,isLoggedIn) {
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    return this
}

const UserOne = new User("ayush",12,true)
const userTwo = new User("chaiaurcode",11,false)
console.log(UserOne);
console.log(userTwo);
