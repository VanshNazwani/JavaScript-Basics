// IIFE (immediately invoked function expressions)
// IIFE is a pattern used to create a local scope and avoid polluting the global namespace

(function chai(){
    console.log(`DB connected for chai`);
}());


( (name) => { //parameter 
    console.log(`DB connected for chai2 ${name}`);
}) ('vansh')