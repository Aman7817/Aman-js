//singleton
//Object.create
///objects literals

/*
const mySym = Symbol("Key1")

const JsUser = {
    name: "Aman",
    "full name ": "Aman Gurjar",
    [mySym]: "myKey1",
    age: 18,
    location: "Bareilly",
    email: "Aman@amazon.com",
    isloginDays: false,
    lastLoginDays: ["Monday","Saturday"]

}

console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full name "])
console.log(JsUser[mySym])

JsUser.emil = "Aman@.com" // changes kerna ho
//Object.freeze(JsUser) /// freeze kerna no
JsUser.email = "gurjar@com"
console.log(JsUser)

/// function

JsUser.greeting = function(){
    console.log("hello js User");

}
JsUser.greetingTwo = function(){
    console.log(`Hello js user, ${this.name}`); // object ko refernce kerna ho to this ka use kero

}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo())

*/

// object declaration
//const tinderUser = new Object() // single tur obj
const tinderUser = {} /// non single

tinderUser.id = "123abc"
tinderUser.name = "ans"
tinderUser.isloggedIn = false
//console.log(tinderUser)

// object ke ander obj 

const regularUser = {
    email: "some@com",
    fullname: {
        userfullname: {
            Firstname: "Aman",
            Lastname: "Gurjar"
        }
    }
}

// value ko access kerne ke liye dot ka use

//console.log(regularUser.fullname.userfullname.Firstname)
// obj ko combine kerna
const obj1 = {1:"a", 2: "b"}
const obj2 = {3: "a",4: "b"}

//const obj3 = {obj1,obj2} // obj ke ander obj ho jayega 

//const obj3 = Object.assign({},obj1,obj2)
// most use this
const obj3 = {...obj1, ...obj2}

//console.log(obj3);
const users = [
    {
        id: 1,
        email: "abv@gmail.com"
    },    

    {
        id: 1,
        email: "abv@gmail.com"
    },

    {
        id: 1,
        email: "abv@gmail.com"
    },
    

]  

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser)); // keys ko arr mein kerdeta hai

console.log(Object.values(tinderUser));

console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isloggedIn'))



const course  = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "aman"
}

//course.courseInstructor

const {courseInstructor: instructor} = course
//console.log(courseInstructor)

console.log(instructor)

//const navbar = ({company}) => {

//}

//navbar(company = "aman")

//{
  //  "name": "aman",
    //"coursename": "js in hindi",
    //"cost": "free"
//}

