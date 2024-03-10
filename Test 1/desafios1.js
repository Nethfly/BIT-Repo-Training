"use strict"
//Hacer un programa que salude
/* console.log("Hola")
document.write("Hola") */

// Hacer programa que salude por el nombre, si no recibe nombre solo saludar

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

const userName = prompt("Enter your name")

// Check if the user provided a name
if(userName === ""){
    //If not, greet them as "Youngling"
        document.write("Hello There! Youngling");
    } else {
        // If they did provide a name, greet them with a welcome message
          document.write('Hello There! ${userName}, Welcome to the Jedi Council');
   
}