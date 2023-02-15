
function getPin(){
const pin= generatePin();
const pinString=pin + '';
if(pinString.length === 4){
    return pin;
}
else{
    return getPin();
}
}

function generatePin(){
    const rendom = Math.round(Math.random()*10000);
return rendom;
}

document.getElementById('generate-pin').addEventListener('click',function(){
    const pin =getPin();
    console.log(pin);
    const displayPinField=document.getElementById('display-pin');
    displayPinField.value=pin;

})
document.getElementById('calculator').addEventListener('click',function(event){
  const number = event.target.innerText;
  const typedNumbersField=document.getElementById('typed-numbers');
  const previousTypedNumber =typedNumbersField.value;
  if(isNaN(number)){
    if(number ==='C'){
   typedNumbersField.value = '';

  }
else if(number==='<'){
const digits = previousTypedNumber.split('');
digits.pop();
const remainingDigits = digits.join('');
typedNumbersField.value=remainingDigits;

}

  }
  else{
    const newTypedNumber=previousTypedNumber+number;
    typedNumbersField.value=newTypedNumber;

  }
})
document.getElementById('verify-pin').addEventListener('click',function(){
   const displayPinField=document.getElementById('display-pin');
   const currentPin=displayPinField.value;

   const typeNumberField=document.getElementById('typed-numbers');
   const typedNumber = typeNumberField.value;
   const pinSuccessMessage=document.getElementById('pin-success');
   const  pinFailedMessage=document.getElementById('pin-failed');
   if(typedNumber===currentPin){
  
   pinSuccessMessage.style.display='block';
   pinFailedMessage.style.display='none';
   }
   else{
  
   pinFailedMessage.style.display='block';
   pinSuccessMessage.style.display='none';
   }
})