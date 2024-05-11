//ARRAY
const myArr=[0,1,2,3,4]
//JavaScript arrays are resizable and can contain a mix of different data types
const myHeros=["Rama","Laksmna","Bharat"]
//Another method to declare the array
const myArr2=new Array(1,3,5,6,"Mayank")
// for(i=0;i<myArr.length;i++)
// {
//     console.log(myArr[i]);
// }
// for(i=0;i<myHeros.length;i++)
// {
//     console.log(myHeros[i]);
// }

//To push item in array
// myArr.push(5)
// myArr.push(6)
// //pop remove the last item
// myArr.pop()
// myArr.unshift(7)//to add the item at first position
myArr.shift()//to shift the item one position
// console.log(myArr.includes(4));
// console.log(myArr.indexOf(4));

// const newArr=myArr.join()
// console.log(myArr);
// console.log(newArr);
// console.log(typeof myArr)

//slice,splice
//slice do not change the original array .
// splice change the original array
//in slice does not include last range
//in splice last range also included
console.log("A ",myArr)

const myN1=myArr.slice(1,3)
console.log(myN1);

console.log("B",myArr)
const myN2=myArr.splice(1,3)
console.log(myN2);

console.log("C ",myArr);