'use strict'

function calcSuperficie(alt, bas) {
    return alt * bas;
}

const altura = Number(prompt("Digite la altura del rectángulo"));
const base = Number(prompt("Digite la base del rectángulo"));

alert(`La superficie del rectangulo es: ${calcSuperficie(altura, base)}`);
