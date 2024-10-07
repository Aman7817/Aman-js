const accountId = 123445
accountEmail = "aman@hC.com"
accountCity = "Bareilly"
let accountPasword = "234456"
let accountState;

// accountId = 2 // not allowed 

accountEmail = "hc@ab.Com"
accountPasword = "28474"
accountCity = "jaipur"

console.log(accountId);

/*
refer not use var
because of issue in block and functional scope  
*/

console.table([accountId,accountPasword,accountCity, accountState,accountEmail])