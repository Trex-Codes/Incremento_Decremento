// sumatoria
dato1 = prompt("Digite el primer dato");
dato2 = prompt("Digite el segundo dato");
sumatoria = dato1 + dato2;
console.log("el resultado de la sumatoria es: " + sumatoria);

// Condicionales
var operacion = prompt("1 para sumar/ 2 para restar / 3 para multiplicar / 4 para dividir") 
// var valor1 = prompt("digite el valor 1");
// var valor2 = prompt("digite el valor 2");
var resultado;

if(operacion == "1"){
	resultado = valor1 + valor2;
	console.log("El resultado es: " + resultado);

}else if(operacion == "2"){
	resultado = valor1 - valor2;
	console.log("El resultado es: " + resultado);

}else if(operacion == "3"){
	resultado = valor1 * valor2;
	console.log("El resultado es: " + resultado);	

}else if(operacion == "4"){
	resultado = valor1 / valor2;
	console.log("El resultado es: " + resultado);

}else {
	alert("Dato no valido dentro del programa");
}

switch(operacion){
	case "1":
			resultado = valor1 + valor2;
			console.log("El resultado es: " + resultado);
		break;

	case "2":
			resultado = valor1 - valor2;
			console.log("El resultado es: " + resultado);
		break;

	case "3":
			resultado = valor1 * valor2;
			console.log("El resultado es: " + resultado);
		break;

	case "4":
			resultado = valor1 / valor2;
			console.log("El resultado es: " + resultado);
		break;
			
	default: 
		console.log("El valor digitado no existe dentro del programa");
		break;
}

// Bucles
var nombre = prompt("¿Cual es su nombre?");
veces = prompt("¿Cuantas veces quiere que se repita?");
var contador;

for(contador = 0;contador<= veces;contador++){
	console.log(nombre);
}

