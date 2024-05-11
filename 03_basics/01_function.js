// Function
function sayName(){
    console.log("M");
    console.log("A");
    console.log("Y");
    console.log("A");
    console.log("N");
    console.log("K");
}
// sayName IT IS ONLY TELLS THE REFERENCED
//sayName();-- it is execute the function

// function addTwoNumber(num1,num2)//at this time it is a parameter, when we give the function definition then we say parameter
// {
//     console.log(num1+num2);
// }
function addTwoNumber(num1,num2)//at this time it is a parameter, when we give the function definition then we say parameter
{
//   let addition=num1+num2;
//   return addition;
    return num1+num2
}
 const result= addTwoNumber(8,9)//at this time we say argument
//  console.log("Result:",result);
function loginUserMessage(username)
{
    if (username===undefined)
    {
        console.log(" Please enter a username");
    }
    else
    {
    return `${username} just logged in`
    }
}
 const name=loginUserMessage()
 console.log(name);