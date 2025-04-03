function calculatecartprice(...num1){ //rest operator or spread operator 
    return num1
}

console.log(calculatecartprice(200,400,600));

const user = {
    username : "vansh",
    price : 200
}
function handleobject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);

    
}

// handleobject(user)

handleobject({
    username :"vansh",
    price: 400
})

const arr = [200,400,500,800]
function returnarray(getarray){
    return getarray[2]
}
console.log(returnarray(arr));

