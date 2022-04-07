'use strict'

function metroPorHora(km) {
    return km * 1000;
}

function millaPorHora(km) {
    return km * 1.60934;
}

const kilometro = Number(prompt("Digite la velocidad en k/h"));

alert(`${kilometro}k/h es igual a ${metroPorHora(kilometro)} metros/h
${kilometro}k/h es igual a ${millaPorHora(kilometro)} milla/h`);