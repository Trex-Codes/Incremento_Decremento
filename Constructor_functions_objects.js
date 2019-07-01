//  constructor que guarda datos de mascota 

function perro(edad,vivo,nombre){
	this.edad = edad;
	this.vivo = vivo;
	this.nombre = nombre;

	this.cambiar= function(edad,vivo,nombre){
		this.edad = false;
		this.vivo = false;
		this.nombre = false;

	}

}

var obvx = new perro();
obvx.cambiar();
console.log(obvx.edad);

var perro1 = new perro(12,true,"Trex");
var perro2 = new perro(32,false,"Ana");

console.log(perro1.edad);
console.log(perro2.edad);

// Estudiantes egresados 
function alumnos(edad,curso,nombre){
	var lumn = {edad: edad,	curso: curso,nombre: nombre,}
	var lumn = alumnos();
}

console.log(alumnos("16","8A","Juan sebastian"));