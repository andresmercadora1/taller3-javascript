'use strict'

function totalCompra(precio, cantidad) {
    return precio * cantidad;
}

function calcularIva(total,  iva) {
    return total + (total * iva / 100);
}


const precio = Number(prompt("Digite el precio del producto"));
const cantidad = Number(prompt("Digite la cantidad de producto"));
const iva = Number(prompt("Digite el valor del iva"));

const total = totalCompra(precio, cantidad);

alert(`El subtotal es: ${total}
El total a pagar es: ${calcularIva(total, iva)}`);