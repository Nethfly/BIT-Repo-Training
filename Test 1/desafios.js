"use strict"
//Hacer un programa que salude
/* console.log("Hola")
document.write("Hola") */

// Hacer programa que salude por el nombre, si no recibe nombre solo saludar

const entrada = prompt ("Enter your name")
console.log (entrada);

switch(entrada){
    case "":
        document.write("Hello There! Youngling");
        break;
    default:
        document.write("Hello There! "+ entrada + ", Welcome to the Jedi Council");
        break;            
}