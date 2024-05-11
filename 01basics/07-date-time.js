//Dates

let myDate=new Date()
//console.log(myDate.toString())//Tue Oct 31 2023 23:12:22 GMT+0530 (India Standard Time)
// console.log(myDate.toLocaleString())//10/31/2023, 11:16:36 PM
// console.log(myDate.getTimezoneOffset())

// myCreatedDate=new Date(2023,9,31)
myCreatedDate=new Date(2023,10,31,5,3,45)
// console.log(myCreatedDate.toLocaleString());


//Date in YY-MM--DD format
let newelyCreatedDate= new Date("2023-01-14")
//  console.log(newelyCreatedDate.toLocaleString());

//Time stamp
let myTimeStamp=Date.now()
// console.log(myTimeStamp)


let newDate=new Date()
console.log(newDate.getMonth()+1);
console.log(newDate.getDay())

