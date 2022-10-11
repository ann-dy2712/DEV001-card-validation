const validator = {
  //...
  isValid: function(CreditCardNumber) {

    //crear variables con let
    let suma1 = 0;
    let suma2 = 0;
    let sumaDigitos = 0;
    let total = 0;
    //Convertir el numero de tarjeta (input) que ya es un string en un array con .split
    let arrCardNumber = CreditCardNumber.split('')
    //Realizar un ciclo for para multiplicar las posiciones pares
    for (let i = 0; i < arrCardNumber.length; i++) {
      let numActual = arrCardNumber[i];
      if (i % 2== 0){
        numActual = arrCardNumber[i] * 2; 
        //Funcion si el resultado es mayor a 9 se le restan 9
        if (numActual > 9) {
          sumaDigitos = numActual - 9;
          suma1 += sumaDigitos;
        }
        else {
           suma1 += numActual;

        }
      }
      else {
        suma1 += numActual;
        suma2 = suma1.split (''); 
      }
    }
    //Ciclo for que suman los numeros del array
    for (let i = 0; i < suma2.length; i++) {
      total+= parseInt (suma2[i]);
    }
    console.log(CreditCardNumber);
    //Si el total es igual a 10 es valido, de lo contrario es invalido
    if (total % 10===0){
      
      alert ("Pago exitoso");
      return true;
    }
    else{
      
      alert ("Pago rechazado");
      return false;
    }
  },
  maskify: function (CreditCardNumber) {
    let ultimos4Numeros = CreditCardNumber.slice(-4)
    let numerosMask= "############" + ultimos4Numeros;
    console.log (numerosMask)  
    }

  //let count=0;
  //let CreditCardNumberHide="";

  //for (let i = 0; i <CreditCardNumber.length; i++)
  //{
    //let d=(CreditCardNumber[CreditCardNumber.length - 1+i]);

    //if (count<4)
    //CreditCardNumberHide=d+CreditCardNumberHide;
    //else
    //CreditCardNumberHide="#"+CreditCardNumberHide;

    //count++;
  }
    
    
export default validator;

    
  


 

//Crear una constante extrayendo el valor del elemento con el ID CreditCardNumber




//Convertir el array en un array de numero
//mostrar en consola con console.log

//buscar los digitos con Posiciones pares
//Establecer la suma total de pares en cero

//Recorrer todos los elementos del arreglo

//Establecer la condicion => digitos con posicion par

//Establecer que pasara cuando la multiplicacion del digito supere el numero 9

//Añadir el resultado a la suma total

//mostrar en consola con console.log 

//buscar los digitos con posiciones impares
//establecer la suma total de impares en cero
//recorrer todo el arreglo

