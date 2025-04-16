// promises is a object that contains all the promises

const promises_one = new Promise   ((resolve, reject) => {
    //Do an async task
    // DB calls , cryptography, network calls
    setTimeout(function (){
        console.log("Async task completed");
        resolve();
    }, 1000); 
})

    promises_one.then(function(){
        console.log("promise consumed"); 
    })