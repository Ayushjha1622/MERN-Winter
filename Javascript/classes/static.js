class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`username: ${this.username}`);
        
    }

    static createId(){
        return `123`
    }
}


const ayush = new User("AYUSH")
console.log(ayush.createId())



class teacher extends User{
    constructor(username,email){
        
    }
}