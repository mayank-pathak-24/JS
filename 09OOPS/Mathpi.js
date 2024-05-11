const descripter=Object.getOwnPropertyDescriptor(Math,"PI")
console.log(descripter);
// console.log(Math);
// Math.PI=5;
// console.log(Math.PI);

const chai={
    name:'ginger chai',
    price:250,
    isAvailable:true

}
// console.log(chai);
console.log(Object.getOwnPropertyDescriptor(chai,"name"));

// to add property like enumberable ,writable,configurable when we do false these property we can't change the object 
Object.defineProperty(chai,'name',{
            enumerable:false,
            writable:false,
            configurable:true
})
// console.log(Object.getOwnPropertyDescriptor(chai,"name"));
for (let [key,value] of Object.entries(chai)) {
    if(typeof value!=='function')
    {
        console.log(`${key}  :  ${value}`);
    }
    
}