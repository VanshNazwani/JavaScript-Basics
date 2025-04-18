// Promises is an object 

const promise_one = new Promise((resolve, reject) => {
    // Do an ASYNC task
    // DB calls , cryptography , network 
    setTimeout(function(){
        console.log("Async task is completed");
        resolve() // it is used to connect promise_one function 
           
    },1000)
})

promise_one.then(function () {
    console.log("promise consumed ");
    
    
})

new Promise((resolve, reject) => {
    setTimeout(function ( ) {
        console.log("Async task 2");
        resolve()
        
    }, 1000)
}).then(function () {
    console.log("async 2 resolved ");
    
})


const promise_two = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username : "vansh", email : "nazwaniv@gmail.com"})
    },1000)
})

promise_two.then(function (user) {
    console.log(user);
        
})


const promise_three = new Promise(function(resolve, reject) {
    setTimeout(function () {
        let error = true;
        if(!error ){
            resolve ({username : "vansh nazwani", password :"vansh123"})
        }
        else{
            reject('Error : something went wrong')
        }
    },1000)
})

promise_three.then((user) => {
    console.log(user);
    returnuser.username;
    
})
.then((username) => {
    console.log(username);
    
})
.catch((function (error) {
    console.log(error);
    
    
}))
.finally(() => {
    console.log("finnaly the promise is either resolved or rejected");
        
})

const promise_five = new Promise(function(resolve, reject) {
    setTimeout(function() {
        let error = false;
        if(!error){
            resolve({username: "javascript", password: "1345"})
        }else{
            reject('Error js went wrong ')
        }
    },1000)
});

async function consumepromisefive() {
  try {
    const response = await promise_five
    console.log(response);
    
  } catch (error) {
    console.log(error);
    
  }
}

consumepromisefive()

async function getallusers() {
    try {
        const response = await fetch('https://api.github.com/users/VanshNazwani')
        // console.log(response);
        
    const data = await response.json()
    console.log(data);
    
    } catch (error) {
        console.log("E : ",error);
        
    }
}


getallusers()
 

// ****** Another method to do this above async function getalluser() ************


// fetch('https://api.github.com/users/VanshNazwani')
// .then((response) => {
//     return response.json()
// })
// .then((data) => {
//     console.log(data);
    
// })
// .catch((error) => console.log(error))


