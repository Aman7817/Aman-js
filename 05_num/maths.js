const score = 2000
console.log(score);

const balance = new Number(100)

//console.log(balance); // 

//console.log(balance.toString().length);
//console.log(balance.toFixed(1)); 

const otherNumber = 123.348887

//console.log(otherNumber.toPrecision(3)); 

const hundreds = 1000000

//console.log(hundreds.toLocaleString('en-IN')); // , leg jate hai


///++++++++maths+++++++++++++++++++++++++++++

console.log(Math);

// console.log(Math.abs(-4)); // neg positive ho jata hai
// console.log(Math.round(4.6)); //
// console.log(Math.ceil(4.2)); // ceil = 4 se jara sa uper bhi hoga to 5 a jayega 
// console.log(Math.floor(4.9));  // florr = lowest value leta hai
// console.log(Math.min(4,3,6,8));
// console.log(Math.max(4,3,6,8));


console.log(Math.random()); // value 0 or 1 ke bech mein aati hai
console.log((Math.random() *10) + 1); // 
console.log(Math.floor(Math.random() *10) + 1); 

const min = 10 
const max = 20 

console.log(Math.floor(Math.random() * (max-min + 1)) + min);