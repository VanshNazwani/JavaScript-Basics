class user{
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`username : ${this.username}`);
        
    }

    create_id(){
        return `123`
    }
}

const user1 = new user("hitesh")
console.log(user1.create_id());



class teacher extends user{
    constructor(username, email){
        super(username) // super keyword is used to extend user class
        this.email = email;
    }
}
const user2 = new teacher("arnav")
console.log(user2.create_id()); 
