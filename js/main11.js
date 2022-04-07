function fechaActual() {
	let dia = prompt("Digite el día actual");
	let mes = prompt("Digite el mes actual");
	const anio = prompt("Digite el año actual");
	
	return {
		dia, mes, anio
	}
}

function calcularDias(fechaAct){
	const fechaini = new Date(`${fechaAct.anio}-${fechaA.mes}-${fechaA.dia}`);
	console.log(fechaAct);
	const fechafin = new Date('2022-12-31');
	const diasdif= fechafin.getTime()-fechaini.getTime();
	const contdias = Math.round(diasdif/(1000*60*60*24));
	return contdias;
}

const fechaA = fechaActual();

const diasR = calcularDias(fechaA);

function calcularSemana(diasRestantes){
	return (diasRestantes / 7).toFixed(2);
}


alert(`Dias restantes del año 2022 es: ${diasR}
Semanas restantes del año 2022 es de: ${calcularSemana(diasR)}`);