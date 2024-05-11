const form=document.querySelector('form')
form.addEventListener('submit',function(e){
   e.preventDefault()
  const height=parseInt(document.querySelector('#height').value) 
  const weight=parseInt(document.querySelector('#weight').value)
  const result=document.querySelector('#results')
  const guide=document.querySelector('#weight-guide')
 
  if(height===''|| height<0 ||isNaN(height))
  {
   result.innerHTML=`Pleas give a valid height ${height}`
  }
  else if (weight==='' || weight<0|| isNaN(weight))
  {
   result.innerHTML=`Please give a valid weight ${weight}`
  }
  else
  {
   const bmi=(weight/((height*height)/10000)).toFixed(2)
     result.innerHTML=`<span>${bmi}</span>`
     if(bmi<18.6)
{
guide.innerHTML=`You are under weight!!!`
guide.style.color="white" 
}
else if(bmi>18.6 && bmi<24.9)
{
   guide.innerHTML="\"Congrats!\" You are fit!!!"
   guide.style.color=" green" 
}
else
{
   guide.innerHTML="\'Oops!!\'You are overweight"
   guide.style.color="red" 
}
 }

})