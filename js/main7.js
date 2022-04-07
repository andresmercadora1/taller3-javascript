'use strict'

function conversor(opt) {
    let grado, temperatura;
    if(opt == 1) {
        grado = Number(prompt("Digite la temperatura en grado fahrenheit"));
        temperatura = (grado - 32) * 5/9;
        if (temperatura == 0) {
            return "Nos congelamos";
        } else if(temperatura >= 5 && temperatura <= 15) {
            return "Esta haciendo frio";
        } else if(temperatura <= 25) {
            return "Está templado el dia";
        } else if(temperatura > 38) {
            return "Tiene fiebre o es el apocalipsis";
        } else {
            return "Temperatura normal";
        }
    } else {
        grado = Number(prompt("Digite la temperatura en grado celsius"));
        temperatura = (grado * 9/5) + 32;
        if (temperatura == 32) {
            return "Nos congelamos";
        } else if(temperatura >= 37 && temperatura <= 50) {
            return "Esta haciendo frio";
        } else if(temperatura <= 77) {
            return "Está templado el dia";
        } else if(temperatura > 100) {
            return "Tiene fiebre o es el apocalipsis";
        } else {
            return "Temperatura normal";
        }
    }

    console.log(temperatura)

}

const opt = Number(prompt(`1. para convertir en celsius
2. para convertir en fahrenheit`));

alert(conversor(opt));