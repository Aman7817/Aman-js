/// dates

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

let myCreateDate = new Date(2024,0,24)
console.log(myCreateDate.toLocaleString());
console.log(myCreateDate.toDateString());
let myCreatedDate = new Date("01-14-2024")
//console.log(myCreateDate.toDateString());

let myTimeStamp = Date.now()

console.log(myTimeStamp);
console.log(myCreateDate.getTime());
console.log(Math.floor(Date.now())/1000);

let newDate = new Date()

console.log(new Date);
console.log(newDate.getMonth()+1);

///'$'{newDate.getDay()} And the time

newDate.toLocaleString('default',{
    weekday: "long",
    //timeZone: ''
})

