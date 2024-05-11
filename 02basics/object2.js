//const tinderUser=new Object() it is way declaration of singlton object
const tinderUser={}// it is a non-singlton object
tinderUser.id="123abc"
tinderUser.name="Monkey"
tinderUser.isLogged=false;
// console.log(tinderUser)

const regularUser={
    email:"mayank@gmail.com",
    fullName:{
        userFullname:{
            firstName:"Mayank",
            lastName:"Pathak"
        }

    }
}
// console.log(regularUser.fullName.userFullname.firstName);
const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}
const obj3={5:'e',6:"f"}
 const obj4=Object.assign({},obj1,obj2,obj3)//to merge multiple object
//  console.log(obj4);
const newObject={...obj1,...obj2,...obj3}// to spread the multiple object
// console.log(newObject);
const users=[
   { id:1,
    email:"h@gmail.com"
   }
   ,{ id:1,
    email:"h@gmail.com"
   },
   { id:1,
    email:"h@gmail.com"
   }
]
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty('isLogged'));// to check property is available or not