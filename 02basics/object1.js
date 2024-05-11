//There are two ways declare the object
// 1. literal   when we declare using literal no singlton is created
// 2. constructor Object.create --always singlton is created
 const mySym=Symbol()
 console.log(typeof mySym);
const jsUser={
    name:"Mayank",
    age :18,
    locatio:"Lucknow",
    Email:"mayank@gmail.com",
    isLoggedIn:true,
    [mySym]:"Pathak"//it is symbol declaration
}
// console.log(jsUser.Email);
// console.log(jsUser["Email"]);//another way to access the element of object
console.log("hii");
console.log(jsUser[mySym]);
// console.log(jsUser["age"],jsUser[mySym]);
//Object.freeze(jsUser)//when we freeze the object then we can't change the value of object


console.log("hii");

jsUser.age=19
console.log(jsUser);
jsUser.greeting= function(){
    console.log("Hello sir good morning how are you");
}
console.log(jsUser.greeting());
jsUser.greetingTwo=function(){
    console.log(`Hello js user,${this.name}`);
}
console.log(jsUser.greetingTwo());