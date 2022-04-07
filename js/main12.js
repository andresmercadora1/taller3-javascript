'use strict'

function calcularTotal(numProducto, nombre, valor) {
    return `
    # de producto: ${numProducto}
    Nombre del producto: ${nombre}
    Precio del producto: ${valor}`;
}

const numeroP = Number(prompt("Digite el numero del producto"));
const nombre = prompt("Digite el nombre del producto");
const precio = Number(prompt("Digite el precio del producto"));

function imprimir(total) {
    return total;
}

const total = calcularTotal(numeroP, nombre, precio);

alert(imprimir(total));