// for of loop
const arr=[1,2,3,4,5]
for(const i of arr)
{
 
    // console.log(i);
}
const Cricketer=["Rohit","KL Rahul","Virat","Gill"];
for(const i of Cricketer)
{
    // console.log(i);
}
const greetings="Hello world!"
for(const greet of greetings)
{
   // console.log(`Each character is :${greet}`);

}
//Maps
const map= new Map()
map.set(`IN`,"India")
map.set('Fr',"France")
map.set("Au","Austrelia")
/*Map known for unique value */
// console.log(map);
// for(const [key,value] of map)
// {
//     console.log(key,":-",value);
// }
for(const [i,j] of map)
{
    //console.log(i,":-",j);
}
const myObj=
{
   "Game1":"cricket",
   "Game2":"Hockey",
   "Game3":"Bollyball" 
}
// for(const [key,value] of myObj)
// {
//     console.log(key,":-",value);
// }// it is not working for object