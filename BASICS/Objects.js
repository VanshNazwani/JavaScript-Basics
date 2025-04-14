// singleton
// Object.create

//object literals
const sym = Symbol("key1")

const user = {
    name : "vansh",
    [sym] : "mykey1",
    age : 19,
    isloggedin : false,
}

// console.log(user.name); // console.log(user["name"]);
// console.log(user[sym]);

// user.name = "ashwani"
// console.log(user.name); // change the value of any variale

// Object.freeze(user) //freeze the object 

// user.age = "22"
// console.log(user.age);

// functions 

user.greeting = function(){
    console.log("hello user");
    
}
console.log(user.greeting);
console.log(user.greeting());


user.greeting2 = function(){
    console.log(`hello user ${this.name}`) // take reference from object
    
}

console.log(user.greeting2);
console.log(user.greeting2());
