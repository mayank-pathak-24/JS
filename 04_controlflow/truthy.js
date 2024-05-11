//const userEmail="mayank@123"
// if(userEmail)
// {
//     console.log("Got the user email");

// }
// else{
//     console.log("Don't have user email");
// }
// falsy values
//false,0,"",-0,BigInt 0n,null,undefined,NaN

//truthy values
// "0",'false',"  ",[],{},function(){}
// const userEmail=[]
// if (userEmail.length===0)
// {
//     console.log("Array is empty");
// }

// const emptyObj={}
// if(Object.keys(emptyObj).length===0)
// {
//     console.log("Object is empty");
// }
//Nullish Coalscing Operator(??): null undefined
let val1;
// val1=5 ??10//O/p:5
// val1=null??10//10
val1=undefined??67//67
val1=null??10??20//10

console.log(val1);

// Ternary operator

// condition?true : false
const teaPrice=100;
teaPrice<=80?console.log("less than 80"):console.log("Greater than 80");;