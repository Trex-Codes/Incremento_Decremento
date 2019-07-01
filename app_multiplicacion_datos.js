var valores_promp = prompt("Valor que desea multiplicar");
var veces_promp = prompt("¿Cuantas veces desea multiplicarlo?");

switch (veces_promp){
	case "1":
			caso_1();
		break;

	case "2":
			caso_2();
		break;

	case "3":
			caso_3();
		break;

	case "4":
			caso_4();
		break;

	case "5":
			caso_5();
		break;

	default:
		console.log("Datos no correspondientes");
}

function caso_1(){
	formula = (valores_promp*1);
	alert("El valor es igual a: " + formula);
}


function caso_2(){
	formula = (valores_promp*2);
	alert("El valor es igual a: " + formula);
}

function caso_3(){
	formula = (valores_promp*3);
	alert("El valor es igual a: " + formula);
}

function caso_4(){
	formula = (valores_promp*4);
	alert("El valor es igual a: " + formula);
}

function caso_5(){
	formula = (valores_promp*5);
	alert("El valor es igual a: " + formula);
}



