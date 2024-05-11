function Setusername(username)
{
    this.username=username;
    console.log("called");
}
function CreateUsername(Username,email,password)
{
    Setusername.call(this.Username)
    this.email=email
    this.password=password
}
const chai=new CreateUsername("Mayank","maynak@.com",123534)
console.log(chai);