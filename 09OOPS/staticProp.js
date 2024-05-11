class User{
    constructor(username)
    {
        this.username=username;
    }
    logMe()
    {
        console.log(`Username:${this.username}`);
    }
    static createID()
    {
        return `12332`
    }
}
const chai=new User("Mayank");
chai.logMe()
//chai.createID()


class Teacher extends User{
    constructor(username,email)
    {
        super(username)
        this.email=email
    }
}
const moto=new Teacher("Pathak","@123")
moto.logMe()