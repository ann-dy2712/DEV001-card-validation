
import validator from './validator.js';


//Declarar constante para invocar el boton validador y usar addEvenListener
const btnValidate = document.getElementById('btnValidate')
btnValidate.addEventListener('click', function () {

    //Declarar constante para invocar el id CreditCardNumber y conectarlo con validator.js
    const CreditCardNumber = document.getElementById('CreditCardNumber').value;
    validator.isValid(CreditCardNumber);

    let validacion = validator.isValid(CreditCardNumber);

     //Crear condicion que solo permite ingresar valores numericos
     if (CreditCardNumber==="" || /^[^0-9]*$/.test(CreditCardNumber)) {  
        alert("Llena el campo Numero de Tarjeta solo con numeros");
      }else 
  
  //Crear alertas pago exitoso y pago rechazado
  if (validacion) {
          alert ("Pago exitoso")
      }
   else{
     alert ("Pago rechazado")
   }


    let franquicia = document.querySelector('#logomarca'); 
    //Crear funcion para mostrar franquicia de tarjeta
    //function franquicias()
    //{
        if (CreditCardNumber [0] == 5){
        let master = document.createElement("img");
        master.src = "images/mastercard.png";
        franquicia.appendChild (master)
        }
        else if (CreditCardNumber [0] ==4){
            franquicia.innerHTML="";
            let visa = document.createElement("img");
            visa.src = "images/credit visa.png";
            franquicia.appendChild (visa);
        }
   // }
   
   
    //Function Maskify
    let inputTarjeta = document.getElementById ("CreditCardNumber").value
    let numerosMask = validator.maskify(inputTarjeta)
    document.getElementById("CreditCardNumber").value =numerosMask
 

let numero= document.getElementById("CreditCardNumber")
numero.addEventListener("keyup" ,() => {
    let numeroinput= document.getElementById("CreditCardNumber").value
    numero.value = numeroinput

    .replace(/\s/g,"")
    .replace(/\D/g,"")
    .trim();
    let ultimosnumeros= document.getElementById ("ultimoscuatro")
    ultimosnumeros.textContent= numeroinput.slice(-4)
    //console.log (ultimosnumeros) 
})    

//Crear condicion que solo deje ingresar entre 13 y 16 digitos
if (CreditCardNumber.length < 13|| CreditCardNumber.length > 16){
    alert("Ingresa entre 13 y 16 caracteres");
} else{
    return false;
}
    return false;

})

//console.log(validator);