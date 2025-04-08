// arrow function () => {}

const user = {
    name: "vansh",
    price: 1000,
    
    welcomemessage: function(){
        console.log(`${this.name } Welcome to website `);
        console.log(this);
    }
}

user.welcomemessage()
user.name = "vansh nazwani"
user.welcomemessage()

console.log(this)

function one(){
    let name = "vansh"
    console.log(this);
}

one()

function one(){
    let name = "vansh"
    console.log(this.name); //undefined 
}

one()


const one1 = () => {
    let name = "vansh"
    console.log(this.name); //undefined 
}

one1()


const addtwo = (num1,num2) => { // In curlybrases have to type return statement (explicit keyword)
    return num1 + num2;
}

console.log(addtwo(3,4))


const addthree = (num1, num2,num3) => (num1+num2+num3) // In paranthesis don't have to type return statement (implicit keyword)
console.log(addthree(3,4,5))


const user1 = () => ({username : "vansh"})
console.log(user1())