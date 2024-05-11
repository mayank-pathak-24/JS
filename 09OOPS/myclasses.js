class User{
    constructor(Username,email,password)
    {
        this.username=Username
        this.email=email
        this.password=password
    }
    encryptPassword()
    {
        return `${this.password}@123`
    }
    changeUsername()
    {
        return `${this.username.toLowerCase()}`
    }
}
const chai=new User('MAyank',"mayank@123","123432")
console.log(chai.encryptPassword());
console.log(chai.changeUsername());