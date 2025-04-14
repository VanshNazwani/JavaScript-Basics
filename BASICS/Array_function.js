const name = ["aman","yash","vansh","atul","shivam"]
const name2 = ["ankita","anushka","nikita"]

const all_names = name.concat(name2)
console.log(all_names);

const arr =[1,2,5,[8,6,4,6],89,4,5,[2,15],45]
console.log(arr.flat(Infinity));
console.log(arr);

console.log(Array.isArray("vansh"));
console.log(Array.from("vansh"));

let a = 100
let b = 200
let c = 300

console.log(Array.of(a,b,c)); //create an array from variables
