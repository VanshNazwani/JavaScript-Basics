class user {
    constructor(username, email, password){
        this.username = username;
        this.password = password;
        this.email = email;

    }
    encryptpassword(){
        return `${this.password}abc`
    }
    changeusername(){
        return `${this.username.toUpperCase()}`
    }
}

const user1 = new user("vansh", "nazwaniv@gmail.com", "123")
console.log((user1.encryptpassword()));;
console.log((user1.changeusername()));

// ************* BEHIND THE CODE SCENE ******************
// Without using Class

// function user(username,password,email){
//     this.username = username;
//     this.email = email;
//     this.password = password;
    
// }

// user.prototype.encryptpassword = function(){
//     return`${this.username.toUpperCase()}`
// }

// const user2 = new user("shivam","shivam@gmail.com","1564")

// console.log(user2.encryptpassword());


