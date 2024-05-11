function user(username,loginCount ,isLoggedIn){
    this.username=username;
    this.loginCount=loginCount;
    this.isLoggedIn=isLoggedIn;
    return this;
}
const userOne= new user('Mayank',8,true);
const userTwo=  new user('Pathak',20,false)
console.log(userOne);
console.log(userTwo);