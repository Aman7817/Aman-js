function SayMyName(){
    console.log("A")
    console.log("b")
    console.log("C")
}

//SayMyName()


//function addTwoNumbers(Number1,Number2){ /// parameters
// console.log(Number1 + Number2);
//}

function addTwoNumbers(Number1,Number2){ /// parameters
    //let result = Number1 + Number2
    //return result
    return Number1 + Number2
}
const result = addTwoNumbers(3, 5)/// arguments

//console.log("Result : ", result);


function loginUserMessage(username = "sam"){///   default value = aub hum 
    if(!username){
        console.log("please enter a username");// is block mein nhi jayenge
        return/// username ke value kabhi undefined nhi ho gii
    }
    return `${username} just logged in`
}

//console.log(loginUserMessage("Aman"))

//console.log(loginUserMessage("Aman"))


function calculateCartPrice(val1,val2,...num1){/// ... ko rest opreater bola jata hai 
    return  num1

}

//console.log(calculateCartPrice(200,400,500))

const user = {
    username: "Aman",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(user)
handleObject({
    username: "sam",
    price: 99
})

const MynewArray = [200,400,500]

function returnSecondValue(getArray){/// function define kiya hai jo  uske second value ko return ker data hai
    return getArray/// smae object vala concept
}

//console.log(returnSecondValue(MynewArray));

console.log(returnSecondValue([200,400,500,1000])); //no defference

