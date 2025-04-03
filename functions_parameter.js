function myname(){
    console.log("V");
    console.log("A");
    console.log("N");
    console.log("S");
    console.log("H");    
}

myname()

// function addtwonumber(num1,num2){ // parameteres (num1 & num2)
//     console.log(num1 + num2);
    
// }

// addtwonumber(3, 5) // arguments (3 & 5)

function addtwonumber(num1 , num2){
    return num1 + num2 
}

const result = addtwonumber(5,8)
console.log("result",result);

function userlogin(username) {
    if(!undefined){ // (username === undefined)
        console.log("please enter a username");
        
        return
    }
    return `${username} just logged in `

}

console.log(userlogin("vansh"));

console.log(userlogin());

