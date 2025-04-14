const regular_user = {
    email: "abc@gmail.com",
    fullname: {
        userFullname: {
            Fisrtname : "Vansh",
            lastname : "Nazwani"
        }
    }
}

console.log(regular_user.fullname.userFullname);


const obj1 = { 1 : "a" , 2 : "b" }
const obj2 = { 3 : "c" , 4 : "d" }
const obj3 = {obj1 , obj2}
const obj4 = Object.assign({} ,obj1,obj2) //copy object from one or more source object to a target object
const obj5 = {...obj1, ...obj2}

console.log(obj3,obj4,obj5);

console.log(Object.keys(regular_user));
console.log(Object.values(regular_user));
console.log(Object.entries(regular_user));

console.log(regular_user.hasOwnProperty('isloggedin'));
console.log(regular_user.hasOwnProperty('email'));
