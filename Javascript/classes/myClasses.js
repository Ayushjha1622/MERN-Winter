class User{
    constructor(username,email,password){
        this.username = username;
        this.email = email;
        this.password = password;

    }


    encryptPassword(){
        return `${this.password}abc`
    }

    changeUsername(){
        return `${this.username.toUpperCase()}`
    }

}


const details = new User("ayush","abc@gmail.com",12345)

console.log(details.encryptPassword());
console.log(details.changeUsername());

