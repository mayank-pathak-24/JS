class User{
    constructor(username)
    {
        this.username=username;
    }
    logME()
    {
        console.log(`USER NAME IS ${this.username}`);
    }
}
class Teacher extends User{
    constructor(username,email,password)
    {
        super(username)
        this.email=email
        this.password=password
    }
    addCource(){
        console.log(`A new course was added by ${this.username}`);
    }

}
const chai=new User("MAYANK");
chai.logME();
const tea=new Teacher("Piyush","piyush@gmail.com","pat@123")
tea.addCource()