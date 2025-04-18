 // call is used to pass current execute function to another function

function setusername(username) {

    //complex DB calls
    this.username = username    
    console.log("username called ");
    
}

function createuser(username, email, password ) {
    setusername.call(this, username)    
    this.email = email
    this.password = password

}

const user = new createuser("vansh","nazwaniv@gmail.com","11346")
console.log(user);
