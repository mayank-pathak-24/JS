const hero=["Mayank","Nirmal","Satyam"]
const city=["Basti","Lucknow","Noida"]
//hero.push(city)
// console.log(hero);
// console.log(hero[3][0]);
//const herocity=hero.concat(city)
//console.log(herocity);
const all_new_herocity=[...hero,...city]
// console.log(all_new_herocity);
//to seprate the array from array we use flat
const anotherArray=[1,2,3,4,[5,6,7],["mayank","Pathak","Kaushalendra"],8,9,10]
const real_anotherArray=anotherArray.flat(Infinity)
//console.log(real_anotherArray);
// to make the array
console.log(Array.from("Mayank"))


let score1=100
let score2=200
let score3=300
let score4=400
console.log(Array.of(score1,score2,score3,score4));