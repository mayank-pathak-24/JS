const myObj={
    js:"JavaScript",
    cpp:"C++",
    rb:"ruby"
}
// for( const key in myObj)
// {
//     console.log(key);//only keys are printed js,cpp,rb
// }
for( const key in myObj)
{
    // console.log(myObj[key]);//only values  are printed javascipt,c++,ruby
}
for( const key in myObj)
{
    // console.log(`${key} shortcut for ${myObj[key]}`)
}
 const programming=["JS","rb","C++","java"]
 for(const i in programming)
 {
    // console.log(programming[i]);
 }
 const map= new Map()
map.set(`IN`,"India")
map.set('Fr',"France")
map.set("Au","Austrelia")
for(const i  in map)
{
    //console.log(i);
}//nothing is printed
