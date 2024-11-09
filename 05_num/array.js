/*
const myArr = [0,1,2,3,4,5]

const myHeors = ["ironman","naaraj"]

const myArr2 =  new Array(1,2,3,4)
console.log(myArr[1]);


// Array methods

//myArr.push(6)
//myArr.push(7)
//myArr.pop()

//myArr.unshift(9)
//myArr.shift()


//console.log(myArr.includes(9));// 9 hai ya nhi 
//console.log(myArr.indexOf(9));

// const newArr = myArr.join()


//console.log(myArr);
//console.log(newArr)

/// slice,splice

console.log("A",myArr);

const myn1 = myArr.slice(1,3)

console.log(myn1);
console.log("B",myArr);

const myn2 = myArr.splice(1,3)
console.log("C",myArr);
console.log(myn2);


*/

const marvel_herose = ["thor","spiderman","ironman"]

const dc_herose = ["superman","batman", "flash"]

//marvel_herose.push(dc_herose)

//console.log(marvel_herose);
//console.log(marvel_herose[3][1]);

//const all_herose = marvel_herose.concat(dc_herose)
//console.log(all_herose);

const all_new_herose = [...marvel_herose,...dc_herose]

//console.log(all_new_herose)


const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array =  another_array.flat(Infinity)
console.log(real_another_array);




console.log(Array.isArray("Aman"));

console.log(Array.from("Aman"))
console.log(Array.from({name:"Aman"}))//interseting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));





 