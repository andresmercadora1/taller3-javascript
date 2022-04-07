'use strict'

function perimetro(rad) {
    return 2*Math.PI*rad;
}

function area(rad) {
    return Math.PI*(Math.pow(rad, 2));
}

const radio = Number(prompt("Digite el radio del circulo"));

alert(`El perimetro del circulo es: ${perimetro(radio).toFixed(2)}
y el area del circulo es: ${area(radio).toFixed(2)}`);