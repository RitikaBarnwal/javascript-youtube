const accountId = 144533
let accountEmail = "ritika@gmail.account"
var accountPassword = "12345"
accountCity = "jaipur"
let accountState;

//accountId = 2 // not allowed

accountEmail = "rits987@gmail.com"
accountPassword = "98765"
accountCity = "Bengaluru"

console.log(accountId)

/*
prefer not to use var because of issue in block scope and functional scope

*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
