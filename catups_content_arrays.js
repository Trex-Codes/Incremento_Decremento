// arrays que contiene datos numero primos
// function num_cot_primos(){
/*for(var i=0;i<102;i++){
	document.write(i++ + "\n");
		if(i>100)
	 }*/
// }
// var num_cot_primos = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50];

var dato = prompt("Digite el dato a evaluar");
alert(dato);
var opcion_respuesta = prompt("1 para multipilcar 1 vez / 2 para multipilcar 2 veces / 3 para multiplicar 3 veces / 4 para multiplicar 4 veces");

// funciones operaciones_x

function operacion_x1(){
	var operacion_x1 = dato*1;
	document.write("El resultado de la operacion es igual a: " + operacion_x1 + "\n");
}

function operacion_x2(){
	var operacion_x2 = dato*2;
	document.write("El resultado de la operacion es igual a: " + operacion_x2 + "\n");
}
function operacion_x3(){
	var operacion_x3 = dato*3;
	document.write("El resultado de la operacion es igual a: " + operacion_x3 + "\n");
}
function operacion_x4(){
	var operacion_x4 = dato*4;
	document.write("El resultado de la operacion es igual a: " + operacion_x4 + "\n");
}

switch(opcion_respuesta){
	case "1":
			operacion_x1();
		break;
	case "2":
			operacion_x2();
		break;
	case "3":
			operacion_x3();
		break;
	case "4": 
			operacion_x4();
		break;
	default:
		console.log("Error");
		break;
}

/*if(operacion_x1 == num_cot_primos[0] || operacion_x1 == num_cot_primos[1] || operacion_x1 == num_cot_primos[2] ||
   operacion_x1 == num_cot_primos[3] || operacion_x1 == num_cot_primos[4]){
  document.write("primo");
}else{
 document.write("no primo");
}

*/

if(dato % 2 == 0){
	document.write("primo");
}else {
	document.write("no primo");
}