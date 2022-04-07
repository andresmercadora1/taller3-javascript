'use strict'

function getNombre() {
    const nom = prompt("Digite su nombre");
    return nom;
}

function imprimirNombre(nomb) {
    return `Bienvenido ${nomb}`;
}

const nombre =  getNombre();

alert(imprimirNombre(nombre));