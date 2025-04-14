// arrays

const arr = [1,5,3,0,4]
console.log(arr);

arr.push(5)
console.log(arr);

const new_arr = ["vansh", "aman","sachin","satyam"]
console.log(new_arr);

const new_arr2 = new Array(1,6,8,90,15)
console.log(new_arr2);

new_arr.pop()
console.log(new_arr);

arr.unshift(2) // used to insert value in beginning of any array 
console.log(arr);

console.log(arr.includes(10));

console.log(arr.join()); // convert into string

console.log(arr.slice(1,4)); //use to extract an section from a array and create new array
console.log(arr.splice(1,4)); // modify the original array directly 

