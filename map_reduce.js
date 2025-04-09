// filters 

const mynums = [1,2,3,4,5,6]

const num = mynums.filter( (num) => num > 2)
console.log(num);


const newnums  = [1,5,6,4,8,7]

newnums.forEach( (nums) => {
    if (num > 2) {
        newnums.push(num);
        
    }
})

console.log(newnums);


// MAP 

const mynumber = [1,2,3,4,5,6,7,8,9]

const new_nums = mynumber.map( (num) => num + 10)

console.log(new_nums);


const new_nums1 = mynumber
                    .map( (num) => num * 10)
                    .map( (num) => num + 1)
                    .filter( (num) => num >= 40)

console.log(new_nums1);



// REDUCE 

const mynum = [1,2,3]

const mytotal = mynum.reduce(function(acc, currval) {
    console.log(`acc : ${acc} and currval : ${currval}`);
    
    return acc + currval
}, 1)

console.log(mytotal);


const mytotal1 = mynum.reduce( (acc, currval) => (acc + currval), 0)

console.log(mytotal1);


