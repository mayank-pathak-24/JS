//1. Primitive type
//7 types : String,Number,Boolean,null
// undefined,BigInt,Symbol

const score=100
const scoreValue=100.4//number

const loggedIn =true//bollean
const outsideTemp=null//return type object
let userEmail;//here at this time value is undefined


//JavaScript is Dynamically typed language there is no need to defined the datatype of variable
const id = Symbol('123')
const anotherId= Symbol('123')//datatype-symbol

console.log(id==anotherId)


const bigNumber=123535324355342432432n//datatype-bigint


//Non-Primitive or Referrence type
//Array,Object,Functions
const heros=["Rama","Krishna","Lakshmana"]
//Object
let myObj={
    name:"Mayank",
    age:21
}
let myFunction=function()//return type function
{
    console.log("Hello World")
 
}

console.log(typeof scoreValue)

//++++++++++++++++++++++++++++++++++++++++++++++


// Stack and Heap in  terms of meomory
//Stack(Primitive)           |Heap (Non-Primitive)
//  we get copy of variable  | we get reference of original value
//                |
//                
let myYoutubeName="mayankpthak526@gmail.com"

let anotherName=myYoutubeName

anotherName="Chai aur Mayank"
console.log(myYoutubeName)
console.log(anotherName)
let userOne=
{
    email:"mayankpathak526@gmail.com",
    upi: "mayank@okaxis"
}
let userTwo=userOne
userTwo.email="Rama@gamil.com"
console.log(userOne.email)
console.log(userTwo.email)