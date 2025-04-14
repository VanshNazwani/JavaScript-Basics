// ******  FOR OF LOOP ***********

const arr = [1,2,3,4,5]
 
for (const num of arr) {
    console.log(num);
    
    
}

const greetings = "Hello vansh"
for (const greet of greetings) {
    console.log("each char is",greet);
    
}

// Maps - doesn't take duplicate values 
 
const map = new Map()
map.set('IN', "India")
map.set('FR', "France")

console.log(map);

for (const [key,value] of map) {
    console.log(key , ": ", value);
    
}


// for_of is not used in object
 
// ***** FOR IN LOOP ********

const myobj = {
    'game1' : 'spiderman',
    'game2' : 'batman'
}

for (const key in myobj) {
    console.log(`${key} is ${myobj[key]}`);
            
}



const programming = ("js", "cpp", "java","py");

for (const key in programming) {
        console.log(key);
        
}



// ********** FOR EACH LOOP **************


const coding = ["js","java","cpp","c","python"]

coding.forEach((item, index,arr) => {
    console.log(item, index, arr);
    
});


function printme(item){
    console.log(item);;

    
}
coding.forEach(printme)


const mycoding = [
    {
        language: "javascript",
        languagefilename : "js"
    },
    {
        language : "python",
        languagefilename : "py"
    },
    {
        language : "java",
        languagefilename: "java"
    }
]


mycoding.forEach((item)  => {
    console.log(item.language);
    
})


