const myNums=[1,2,3,4]
// const myTotal=myNums.reduce(function(acc,currval){
//     console.log(`acc:${acc} currval:${currval}`);
//     return acc+currval
// }, 10)
// console.log(myTotal);


const mySum=myNums.reduce((acc,currval)=>{
    console.log(`acc:${acc} currval:${currval}`);
    return acc+currval;
},0)
console.log(mySum);


const shoppingCart=[
    {
        itemName:"js course",
        price:499
    },
    {
        itemName:"Python course",
        price:799
    },
    {
        itemName:"C++ course",
        price:899
    },
    {
        itemName:"Html course",
        price:599
    }
]
const total=shoppingCart.reduce((acc,item)=>acc+item.price,0)
console.log(total);