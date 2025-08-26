/*
export function addTwoNumbers(x, y){
  console.log(x+y)
  return x+y
}

let r1= addTwoNumbers(2,3)
let r2= addTwoNumbers(-2,-3)
let r3= addTwoNumbers(13,26)
let r4= addTwoNumbers (-10,30)

function main(){
console.log (r1)
console.log (r2)
console.log (r3)
console.log (r4)
}

main()*/

function sumar (x,y){
  
  return x+y;
}

function restar(x,y){
  return x-y;
}

function multiplicar(x,y){
  return x*y;
}

function dividir(x,y){
  return x/y;
}



const option= +prompt ("Hola! Selecciona una de las siguientes opciones de tu calculadora:\n 1.Sumar\n 2.Restar\n 3.Multiplicar\n 4.Dividir")
switch (option){
  
  case 1:
    const num1= +prompt("Ingresa un número: ")
    const num2= +prompt("Ingresa otro número: ")
    console.log(sumar(num1,num2));
  break;

  case 2:
    const num3= +prompt("Ingresa un número: ")
    const num4= +prompt("Ingresa otro número: ")
    console.log(restar(num3,num4));
  break;
  
  case 3:
    const num5= +prompt("Ingresa un número: ")
    const num6= +prompt("Ingresa otro número: ")
    console.log(multiplicar(num5,num6));
  break;
  
  case 4:
    const num7= +prompt("Ingresa un número: ")
    const num8= +prompt("Ingresa otro número: ")
    console.log(dividir(num7,num8));
  break;  

  default:
    console.log("Escoje una opción valida");
    
}