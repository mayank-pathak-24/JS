const accountId =1989;
let accountEmail="mayankkpathak526@gmail.com";
var accountPassword="12345";
accountCity= "JAIPUR";
 let accountState;// if we print then it print "undefined"
//accountId=2; //not allowed
accountEmail="Piyush@gmail.com";
accountPassword="53321";
accountCity="Uttar Pardesh";
console.log(accountId); 
console.table([accountEmail,accountPassword,accountCity,accountState])
/*
Prefer not to use var 
because of issue in block and functional scope
*/