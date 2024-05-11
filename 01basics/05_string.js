const name="Mayank"
const repoCount=50
//console.log(name+repoCount+"Pathak"+65)
console.log(`my name is ${name}and my repoCount is ${repoCount}`)
//" `` - this operator is none is backticks"

//another way to declare string
const gameName=new String('Mayank-Pathak')

console.log(gameName[0])
// to find length of string
console.log(gameName.length)
// convert into uppercase
console.log(gameName.toUpperCase())
//convert into lowercase
console.log(gameName.toLowerCase())
//original string is not change because its meomory allocate in stack and stack give copy of original value
console.log(gameName)
//To find the position of Character we use charAt()
console.log(gameName.charAt(2))
//To find the index of character
console.log(gameName.indexOf('k'))

const newString=gameName.substring(0,4)//we did not give the negative value in subString
console.log(newString)

const anotherString= gameName.slice(-13,4)
console.log(anotherString)
//trim remove the spaces
const newStringOne="    Mayank    "
console.log(newStringOne)
console.log(newStringOne.trim())

const url="https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20','--'))

console.log(url.includes('hitesh'))
const splitName='mayank-nirmal-kaushal'
console.log(splitName.split('-'));