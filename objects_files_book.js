// Se declara una array con conponentes de un pc

var partepc = {
	ISO: "windows",
	ram: "32GB",
	disco_duro: "10TB",
	procesador: "Intel-icore9",
	refrigeracion: "Ventilador",
}

// se llama a el disco_duro y a la refrigeracion

console.log(partepc.disco_duro);
// console.log(partepc["disco_duro"]);
console.log(partepc.refrigeracion);
// console.log(partepc["refrigeracion"]);

partepc.ISO = "Linux";
console.log(partepc.ISO);

// modificar atributos de cada propiedad 

var herramientas = {
	madera: 1,
	martillo: 2,
	puntilla: 3,

	modificherra:function(){
		herramientas.madera=2;
	}
}

herramientas.modificherra();
console.log(herramientas.madera);



// **********************************

function romo(nombre){
	this.d1=1;
	this.d2=2;
	this.d3=3;

	this.modif = function(nombre){
		this.d1=33;
		this.d3=nombre;
	}
}

var objetoX = new romo();
objetoX.modif("LUcas");

console.log(objetoX.d1);
console.log(objetoX.d3);
