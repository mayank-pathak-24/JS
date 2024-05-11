const User={
    _email:"mayankpathak526@gmail.com",
    _password:"mayank@234",
    get email()
    {
        return this._email.toUpperCase();
    },
    set email(value)
    {
        this._email=value;
    }
}
const ram=Object.create(User)
console.log(ram.email);