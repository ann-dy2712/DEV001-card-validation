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
      if (i % 2!= 0){
        numActual = arrCardNumber[i] * 2; 
        //Funcion si el resultado es mayor a 9 se le restan 9
        if (numActual > 9){
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
    //console.log(CreditCardNumber);

    //Si el total es igual a 10 es valido, de lo contrario es invalido
    if (total % 10===0)
   
   {
      return true;
    }
    else{
      return false;
    }
  },


maskify: (CreditCardNumber) =>{
  CreditCardNumber = CreditCardNumber.split("")
  let enmascarar =""
  for (let i=0;i<CreditCardNumber.length -4; i++){
    enmascarar += "#"
  }
  let ultimos4Numeros = 
  CreditCardNumber.slice(-4).toString().replace(/,/g,"")
  enmascarar +=ultimos4Numeros
  return enmascarar
}
}
    
export default validator; 

 