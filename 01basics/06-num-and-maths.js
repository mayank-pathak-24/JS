const score=400
// console.log(score)


const balance=new Number(100)
// console.log(balance);

// console.log(balance.toString().length)
// console.log(typeof balance);
// console.log(balance.toFixed(2))

const otherNumber=123.456
//console.log(otherNumber.toPrecision(4))
// To apply comma to the number(by default provide in US system)
const hundered=10000000
// console.log(hundered.toLocaleString())
//To apply like indian system
// console.log(hundered.toLocaleString('en-IN'))
//+++++++++++++++++++++++++++ Maths+++++++++++++++++++++++
console.log(Math.abs(-453))
console.log(Math.round(4.5));
//ceil value means take greater value
console.log(Math.ceil(4.3))//5
//floor value means take lower value
console.log(Math.floor(4.9))//4
//choose minimum value in multiple value
console.log(Math.min(9,3,5,3))
console.log(Math.max(4,6,8.9,4,3))
//find squareroot
console.log(Math.sqrt(5).toPrecision(3))


//console.log(Math.random())
console.log((Math.random()*10)+1)
console.log(Math.floor((Math.random()*10)+1))

const min=10
const max=20
console.log(Math.floor(Math.random()*(max-min+1)+min))