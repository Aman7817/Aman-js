/// {} jub function and if else etc ke sath aye to isse scope bola jata hai

//  var c = 300  /// 30 hi print ho ga 

let a = 300

if(true){    //// block scope
    let a = 10      /// a bhar nhi jayega 
    const b = 20    /// b bhe nhi jayega

    console.log("Inner :", a)

    //var c = 30// ya only c = 30  // c chla jayega 
}   /// so var ko ignore kro

 //console.log(a); //outut nhi ayega
//console.log(b); // same as
//console.log(c);

/// nested scope

function one(){
    const username = "Aman"

    function two(){
        const website = "youtune"
        console.log(username);
    }
    //console.log(website);

    two()
}

//one()

if(true){
    const username = "Aman"
    if(username === "Aman"){
        const website = "youtube"
        //console.log(username + website)
    }
    //console.log(website);
}

//console.log(username);

/// +++++++++++++++++++++++++++++ intersting +++++++

console.log(addone(5));

function addone(value){
    return value + 1
}




const addtwo =  function(value){
    return value + 2
}

addtwo(5)