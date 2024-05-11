// const promiseOne=new Promise(function(resolve,reject)
// {
//     //Do an async task 
//     //Db calls,cryptography,network
//     setTimeout(function(){
//         console.log('Async task is completd');
//         resolve()// resolve is directly connected to then
//     },1000)
    
// })
// promiseOne.then(function(){
//     console.log("Promise consumed");
// })
// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("Async Task 2");
//         resolve()
//     },1000)
// }).then(function(){
//     console.log("Async 2 resolved");
// })


// const promiseThree=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve({username:'Mayank',roll_number:90,last_name:'Pathak'})
//     },1000)

// })
// promiseThree.then(function(user){
//     console.log(user);
// })

const promiseFour=new Promise(function(resolve,reject){
setTimeout(function(){
    let error=true;
    if (!error)
    {
        resolve({username:"Mayank",password:'2345'})
    }
    else
    {
        reject('ERROR:Something went wrong')
    }

},2000)
})
 const username=promiseFour.then((user)=>{
    console.log(user);
    return user.username;
}).then((username)=>{
    console.log(username);
}).catch((error)=>{
    console.log(error);
}).finally(()=>{console.log("The Promises is either resolved are rejected");})


const promiseFive=new Promise(function(resolve,reject){
    setTimeout(()=>{
        let error=false;
        if(!error)
        {
            resolve({subject:"Javascript",password:'42342'})
        }
        else{
            reject("Erro:JS went wrong")
        }
    },2000)
})
async function consumePromiseFive(){
    try {
        const responce=await promiseFive
        console.log(responce);
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive()
async function getAllUsers(){
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users')
    
            const data = await response.json()
            console.log(data);
        } catch (error) {
            console.log("E: ", error);
        }
    }