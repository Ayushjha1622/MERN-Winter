const User = {
    email: "abc@gmail.com",
    password: "abc",


    set email(value){
        this._email = value
    },

    get email(){
        return this._email
    }

}

const tea = Object.create(User)
console.log(tea.email);

