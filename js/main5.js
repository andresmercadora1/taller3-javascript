'use strict'

function validarNombre(nom) {
    if(isNaN(nom)) {
        return `Tu nombre es: ${nom}`;
    } else {
        return `Nombre no válido`;
    }
    
}

const nombre = prompt("Digita tu nombre");

alert(validarNombre(nombre));