function calculateCartPrice(val1,val2,...num1)// .... is a rest operator
{
return num1;//val1=90,val2=7 and rest of thing goes inside the num1
}
console.log(calculateCartPrice(90,7,39,500));
const user={
    username:"mayank",
    price:899
}
function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`)
}
handleObject(user)// it is first way to pass object
// Second way
handleObject({username:"Nirmal",price:599})


const myNewArray=[100,200,300,400,500,600];

function returnSecondValue(getArray)
{
    return getArray[2];

}

 console.log(returnSecondValue(myNewArray));//first way to pass Array
console.log(returnSecondValue([10,200,40]));//Second to paas array