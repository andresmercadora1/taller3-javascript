'use strict'

function suma(num1, num2) {
    return num1 + num2;
}

function resta(num1, num2) {
    return num1 - num2;
}

function mult(num1, num2) {
    return num1 * num2;
}

function divi(num1, num2) {
    return num1 / num2;
}

const numero1 = Number(prompt("Digite el numero 1"));
const numero2 = Number(prompt("Digite el numero 2"));

alert(`La suma de ${numero1} + ${numero2} = ${suma(numero1, numero2)}
La resta de ${numero1} - ${numero2} = ${resta(numero1, numero2)}
La multiplicación de ${numero1} X ${numero2} = ${mult(numero1, numero2)}
La divición de ${numero1} / ${numero2} = ${divi(numero1, numero2)}`);