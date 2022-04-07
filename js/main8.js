'use strict'

function calcularImc(altura, peso) {
    const alt  = (altura/100).toFixed(2);
    const imc = (peso/(alt * alt)).toFixed(2);

    if (imc < 18.5) {
        return "Bajo peso debe ir al nutricionista";
    } else if(imc <= 24.9 ) {
        return "Normal";
    } else if(imc <= 29.9) {
        return "Sobrepeso";
    } else {
        return "Obeso debe ir al nutricionista";
    }
}

const altura = Number(prompt("Digite su altura"));
const peso = Number(prompt("Digite su peso"));

alert(calcularImc(altura, peso))