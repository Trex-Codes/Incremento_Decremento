alert("Bienvenido a el sitio, Digite sus datos correspondiente");

// Declara output para datos del usuario
var nama_prom = prompt("Digite su nombre");
var yeard_prom = prompt("Digite su edad");
var celt_prom = prompt("Digite su numero de telefono");

 // alert con los datos digitados por el usuario
alert("Sus datos son los siguientes: " + nama_prom + " " + yeard_prom + " " + celt_prom);


// Se crea un objeto con los datos del Usuario

var datos_storage = {
	nombre: nama_prom,
	Edad: yeard_prom,
	telefono: celt_prom,
}
console.log(datos_storage);

var quest_Veri = prompt("Datos correctos? S/N");

if(quest_Veri == "S"){
	alert("OK, estaremos atentos para su llamada");
}else {
	if(quest_Veri == "N"){
	alert("Digite sus datos nuevamente");

	// Datos declarados en caso de False
	var nama_prom_false = prompt("Digite su nombre");
	var yeard_prom_false = prompt("Digite su edad");
	var celt_prom_false = prompt("Digite su numero de telefono");

	//objecto con los datos del output

var datos_storage = {
	nombre: nama_prom,
	Edad: yeard_prom,
	telefono: celt_prom,

	cambio_case_Else:function(){
		datos_storage.nombre = nama_prom_false;
		datos_storage.Edad = yeard_prom_false;
		datos_storage.telefono = celt_prom_false;
	}
}
	datos_storage.cambio_case_Else();

	console.log(datos_storage.nombre);
	console.log(datos_storage.Edad);
	console.log(datos_storage.telefono);

	}
}
