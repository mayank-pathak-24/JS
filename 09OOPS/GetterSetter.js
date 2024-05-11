class User{
    constructor(username,email,password)
    {
        this.username=username;
        this.email=email;
        this.password=password;
    }
    get password()
    {
        //return this._password.toUpperCase()
        return`${this._password}mayank`
    }
    set password(value)
    {
        this._password=value;
    }
    get email()
    {
        return this._email.toUpperCase();
    }
    set email(value)
    {
        this._email=value;
    }
}
const mayank=new User("Pathak","pathak@123","@abc")
console.log(mayank.password);
console.log(mayank.email);