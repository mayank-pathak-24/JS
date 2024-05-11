// for each loop
 const coding=["JS","c++","Java","Python"]
 coding.forEach(function(index){
    console.log(index);
 })
 
// coding.forEach((item)=>{console.log(item);})
// function printMe(item)
// {
//     console.log(item);
// }
// coding.forEach(printMe)


// coding.forEach((item,index,arr)=>{
//     console.log(item,index,arr);
// })
const myCoding=[
    {
        languageName:"Javascript",
        languageFileName:"Js"
    },
    {
        languageName:"Java",
        languageFileName:"java"
    },
    {
        languageName:"C++",
        languageFileName:"cpp"
    }
]
myCoding.forEach((item)=>{
     console.log(item.languageFileName);
})
