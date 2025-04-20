const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");
console.log(descriptor);

const chai = {
    name: "ginger chai",
    price: "250",
    isavailable: true,
    orderchai: function () {
        console.log("chai not prepared");
    }
};
 
console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai, 'name', {
    writable: false,
    enumerable: false,
});

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

// 🔁 Correct way to iterate over an object
for (const [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function') {
        console.log(`key : ${key} : ${value}`);
    }
}
