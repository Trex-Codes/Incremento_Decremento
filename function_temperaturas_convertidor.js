    
//  ("De Fahrenheit a Celsius");
//  ("De Celsius a Fahrenheit");
//  ("De Kelvin a Celsius");
//  ("De Celsius a Kelvin");
//  ("De Kelvin a Fahrenheit");
//  ("De Fahrenheit a Kelvin");

var quest_tipo_caso = prompt("digite el caso que desea probar");
switch(quest_tipo_caso){
	case "1":
		 Fahrenheit_a_Celsius();
	break;
	case "2":
		Celsius_a_Fahrenheit();
	break;
	case "3":
		Kelvin_a_Celsius();
	break;
	case "4":
		Celsius_a_Kelvin();
	break;
	case "5":
		Kelvin_a_Fahrenheit();
	break;
	case "6":
		 Fahrenheit_a_Kelvin();
	break
	default:
		alert("all end");
}

function Fahrenheit_a_Celsius(){
	alert("De Fahrenheit a Celsius");
	var ques = prompt("Digite el dato");
	var formula = (5*ques-32/9);
	document.write("La conversion es igual a: " + formula);
	}

function Celsius_a_Fahrenheit(){
	alert("De Celsius a Fahrenheit");
	var ques = prompt("Dgite el dato");
	var formula = (9*ques/5+32);
	document.write("La conversion es igual a: " + formula);
	}

function Kelvin_a_Celsius(){
	alert("Kelvin a Celsius");
	var ques = prompt("Digite el dato");
	var formula = (ques-273.15);
	documentw.write("La conversion es igual a: " + formula);
	}

function Celsius_a_Kelvin(){
	alert("Celsius a Kelvin");
	var ques = prompt("Digite el dato");
	var formula = (ques + 273.15);
	document.write("La conversion es igual a: " + formula);
	}	

function Kelvin_a_Fahrenheit(){
	alert("Kelvin a Fahrenheit");
	ques = prompt("Digite el dato");
	formula = (9*ques-273.15/5+32);
	document.write("La conversion es igual a: " + formula);
	}

function Fahrenheit_a_Kelvin(){
	alert("De Fahrenheit a Kelvin");
	ques = prompt("Digite el dato");
	formula = (5*ques-32/9+273.15);
	document.write("La conversion es igual a: " + formula);
	}	