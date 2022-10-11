import validator from './validator.js';


//Declarar constante para invocar el boton validador y usar addEvenListener
const btnValidate = document.getElementById('btnValidate')
btnValidate.addEventListener('click', function () {

    //Declarar constante para invocar el id CreditCardNumber y conectarlo con validator.js
    const CreditCardNumber = document.getElementById('CreditCardNumber').value;
    validator.isValid(CreditCardNumber);




}
)

console.log(validator);