function outer() {
    function inner() {
        console.log("hello vansh");
        var a = 10;
    }    
    inner()
}
outer();


function a() {
    var b = 10;
    c();
    function c() {
        console.log(b);
    }
    
}
a();

// lexical envirnment or lexical scope is created when a execution envirnment created 
0