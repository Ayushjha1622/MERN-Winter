function setUserName(username){
    this.username = username;
    console.log("CALLED");
    
}


function createUser(username,email,password){
    setUserName.call(this.username)


    this.email = email
    this.password = password
}

const ch = new createUser("ayuhs","abc@gmail.com",12345)
console.log(ch);
