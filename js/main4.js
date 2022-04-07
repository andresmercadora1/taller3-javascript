'use strict'

function calcCubo(num) {
    return Math.pow(num, 3);
}

const numero = Number(prompt("Digite un numero"));

alert(`El cubo de ${numero} es; ${calcCubo(numero)}`);