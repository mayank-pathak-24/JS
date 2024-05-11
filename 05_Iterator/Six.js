const coding=["JavaScript","Java","c++","Ruby"]


// const value=coding.forEach((item)=>{
//    // console.log(item);
//    return item//forEach no value are return
// })
// console.log(value);


const myNums=[1,2,3,4,5,6,7,8,9]

//const newNums=myNums.filter((num)=>num>3)
//console.log(newNums);//[4,5,6,7,8,9]

// const newNums=myNums.filter((num)=>{
//     return num>2

// })
// console.log(newNums);
// const newNums=[]
// myNums.forEach((num)=>{
//     if(num>4)
//     {
//         newNums.push(num)
//     }
// })
// console.log(newNums);
const books=[
    {tile:"Book One",genre:'fiction',publish:1981},
    {tile:"Book two",genre:'Non-fiction',publish:1982},
    {tile:"Book three",genre:'History',publish:1981},
    {tile:"Book four",genre:'Science',publish:1983},
    {tile:"Book five",genre:'Non-fiction',publish:1984},
    {tile:"Book six",genre:'fiction',publish:1981},
    {tile:"Book seven",genre:'History',publish:2008},
    {tile:"Book eight",genre:'Math',publish:1989},
    {tile:"Book nine",genre:'fiction',publish:2006},
]
const userBooks=books.filter((bk)=>bk.publish>2000 && bk.genre==='History')

console.log(userBooks);