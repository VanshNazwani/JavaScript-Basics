class user{
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`Username is ${this.username}`);
        
    }
}

class teacher extends user{
    constructor(username, email, password){
        super(username) // super keyword is used to extend user class
        this.email = email;
        this.password = password;
    }

    addcourses(){
        console.log(`A new course added by ${this.username}`);
    }
}

const user1 = new teacher("Vansh Nazwani","nazwaniv@gmail.com","16565")
user1.addcourses();
user1.logMe();

console.log(user1 instanceof teacher);
console.log(user1 instanceof user);
