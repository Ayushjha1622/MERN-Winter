class User {
    constructor(email,password) {
        this.email = email
        this.password = password
    }

    set email(value){
        this._email = value.toUpperCase()
    }

    get email(){
        return this._email.toUpperCase()
    }
    get password(){
        return this._password.toUpperCase()
    }

    set password(value){
        this._password = value.toUpperCase()
    }

   
}

const ayush = new User("aj","123")
console.log(ayush.password);
console.log(ayush.email);
