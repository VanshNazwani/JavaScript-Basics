function one(){
    const name = "vansh"
    
    function two(){
        const website="youtube"
        console.log(name);
    }
    // console.log(website); //this is giving an error because we are giving output outside the two function scope .
    two()
}
one()

if (true) {
    const name = "vansh nazwani"
    if(name === "vansh nazwani"){
        const website = " youtube"
        console.log(name + website);
    }
    
}


// ################################  INTERESTINFG ################################
 
//  hosting 

console.log(addone(5));

function addone(num){ // in this type of function we can call function before function initializing
    return num + 1
    
}

const addtwo = function(num){ // in this type of function we can't call function before initializing
    return num + 2 
}

console.log(addtwo(5))


