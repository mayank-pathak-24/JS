const user={
username:"Mayank",
price:900,
welcomeMessage(){
    console.log(`${this.username},welcome to my website`);
    console.log(this);
                }// this tells about the current context
}
//  user.welcomeMessage()
// user.username="Pathak"
// user.welcomeMessage()
// console.log(this);

// function chai()
// {
//     let username ="Mayank Pathak"
//     console.log(this);
// }
// chai()
// const chai=function()
// {
//     let username="hitesh"

//     console.log(this.username);
// }
// chai()//value of this function is undefined



// I am going to discuss about the topic whose name is ARROW FUNCTION

// const chai=() =>
// {
//     let username="Mayank"
//     console.log(this.username);
// }
// chai()// value of this function is undefined

const code=()=>
{
    let username="hitesh"
    console.log(this);
}
// code()
/* both the normal function and the arrow function we can not use this */


// const addTwo=(num1,num2)=>
// {
//     return num1+num  ** it is explicit return// if we use curlybrasis the we have to use curly brasis
// }
// const add=addTwo(5,5)
// console.log(add);
// const addTwo=(num1,num2) => num1+num2// implicit return

// const addTwo=(num1,num2)=> (num1+num2)
 const addTwo=()=> ({username:"hitesh"})//in this we reutrn object
// console.log(addTwo(3,6));


// Immediately Invoked Function Expressions (IIFE)
  (function chai()// NAMED IIFE FUNCTION
  {
    console.log(`DB Connected`);
  })();
  // the function which is automaticaly invoked
  // some time we face problem with global scope pollution 

//   (()=>// simple IIFE FUNCTION
//   {
//   console.log(`DB connected two`);
//  }
//   )();
  
((name)=>
{
    console.log(`Db connected two ${name}`);
})("mayank")