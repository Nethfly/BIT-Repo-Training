"use strict"
//Hacer un programa que envie un mensaje a la consola y a la interfaz de usuario
/* console.log("Hola")
document.write("Hola") */


// Hacer programa que reciba un nombre por parte del usuario, si existe nombre saludar por nombre, de otra manera, saludar 'Hola'

/*const entrada = prompt ("Enter your name")
console.log (entrada);
switch(entrada){
    case "":
        document.write("Hello There! Youngling");
        break;
    default:
        document.write("Hello There! "+ entrada + ", Welcome to the Jedi Council");
        break;          
}*/


// Hacer un programa que reciba aparte nobre y apellido y que de como resultado nombre completo.

/*const name = prompt("Enter your name")
const lastname = prompt("Enter your last name");
//console.log(name + ' ' + lastname);
//document.write(name + ' ' + lastname);
// Interpolacion de variables (Alt+96=`)
document.write(`Your full name is: ${name} ${lastname}`); */


// Hacer un programa que reciba 2 numeros del usuario y los sume

/*const number1 = Number(prompt("Enter the first number"));
const number2 = parseInt(prompt("Enter the second number"));
console.log(number1 + number2);
//document.write(number1+number2);
document.write(`The result of the sum of ${number1} plus ${number2} is ${number1 + number2}`); */


// Hacer un programa que reciba del usuario un número, y muestre si el número ingresado es cero, de otra manera que muestre si es positivo si es negativo

/*const number = Number(prompt("Enter the number you want to verify"));
console.log(number);
if (number == 0)
    document.write ("number is zero");
else if (number > 0)
    document.write ("number is positive");   
if (number < 0)
    document.write ("number is negative"); */


//Hacer un programa que reciba del usuario dos números, y muestre cual es el número mayor y cual es el número menor

let num1 = prompt("Enter the first number:");
let num2 = prompt("Enter the second number:");
num1 = parseFloat(num1);
num2 = parseFloat(num2);
if (num1 > num2) {
    console.log(" The number is greater than: " + num1);
    console.log(" The smallest number is: " + num2);
    document.write(" The Greater number is: " + num1);
    document.write(" The smallest number is:" + num2);
} else if (num2 > num1) {    
    console.log(" The Greater number is: " + num2);
    console.log(" The smallest number is: " + num1);
    document.write(" The Greater number is: " + num2);
    document.write(" The Smallest number is: " + num1);
}