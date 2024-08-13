function getpin(){
    const pin = generatePin();
    const pinString = pin + '';
    if(pinString.length===4){
        return pin ;
    }
    else{
        // console.log('pin not 3 digit found',pin);
        return getpin();
    }
}


function generatePin(){
    const random = Math.round(Math.random()*10000);
    return random;
}
document.getElementById('generate-pin').addEventListener('click',function(){
    const pin =getpin();
    console.log(pin);
    const displayField = document.getElementById('generate-pin-input');
    displayField.value = pin;
})

document.getElementById('calulator').addEventListener('click',function(event){
    const number = event.target.innerText;
    const typedNumberField = document.getElementById('typed-number');
    const previousTypedNumber =typedNumberField.value;
    if(isNaN(number)){
        if(number==='C'){
            typedNumberField.value = '';
        }
        else if(number==='<'){
            const digits = previousTypedNumber.split('');
            digits.pop();
            const remainingDifits = digits.join('');
            typedNumberField.value = remainingDifits;
        }
    }else{
        
        const previousTypedNumber = typedNumberField.value;
        const newTypedNumber = previousTypedNumber + number ;
        typedNumberField.value = newTypedNumber;
    }
   
})
document.getElementById('verify-pin').addEventListener('click',function(){
   const displayPinField = document.getElementById('generate-pin-input');
   const currentPin = displayPinField.value;

   const typedNumberField = document.getElementById('typed-number');
   const  typedNumber = typedNumberField.value;


   const pinSuccessMessage =document.getElementById('pin-success');
   const pinFailurMessage =document.getElementById('pin-failure');
   if(typedNumber===currentPin){
    
    pinSuccessMessage.style.display='block';
    pinFailurMessage.style.display='none';
   }
   else{
    
    pinFailurMessage.style.display='block';
    pinSuccessMessage.style.display='none';
   }
})