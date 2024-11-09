const user = {  //// create obj 
    username: "Aman",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`)/// current context ko refer  kerta hai this

        //console.log(this);
    }

}

//user.welcomeMessage()
//user.username = "sam"
//user.welcomeMessage()

//console .log(this); //  output = {}

/// function

//function chai() {
//    let username = "Aman"
//    console.log(this.username);
//}
//chai()


//const chai = function() {
//    let username = "Aman"
//  comsole.log(username)
//}

const chai = () => {  /// arrow 
    let username = "Aman"
    console.log(this.username);
}


// chai()

//const addtwo = (num1,num2) => {// {} uses hua to return likhna padega
//    return num1 + num2
//}

//console.log(addtwo(3,7));

//const addTwo = (num1,num2) => num1 + num2

//const addTwo = (num1,num2) => (num1 + num2)  // () likha hai to return nhi likhna nhi padega
 
//const addTwo = (num1,num2) => {username: "Aman"} // obj no return

const addTwo = (num1,num2) => ({username: "Aman"})

console.log(addTwo(3,7));

const MyArray = [1,2,3,4,5]
//MyArray.forEach()