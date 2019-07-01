var libro = {
	titulo: "Desarrollo web Agil con AngularJS",
	autor: {
		nombre: "Juan sebastian giraldo adames", 
		nacionalidad: "Colombiana",
		edad: "16",
		contacto: {
			instagram: "Trex_Codes",
			email: "Juan.13JSG@gmail.com",
		}
	}, 
	editorial: {
		nombre: "E.books",
		email: "E.books@outlook.es",
	}
};

// Acceder datos desde array
console.log(libro.titulo);

// igualdad entre 2 objects 

var coche1 = { marca: "ford", color: "rojo"};
var coche2 = { marca: "ford", color: "rojo"};
var coche3 = coche1;

if(coche1.marca === coche2.marca){
	console.log("True");
}else{
	console.log("False");
}

if(coche3.marca === coche2.marca){
	console.log("True");
}else{
	console.log("False");
}


var data1 = [{ nombre: "Juan", edad:12, curso: "7A"}, { nombre: "Ana", edad:13, curso:"7A"}];
var data2 = [{ nombre: "Pedro", edad:14, curso: "8B"}, { nombre: "Camilo", edad:15, curso:"8A"}];
var data3 = [{ nombre: "Laura", edad:13, curso: "9A"}, { nombre: "Rosa", edad:16, curso:"9B"}];

console.group();
console.table(data1);
console.table(data2);
console.table(data3);
console.groupEnd();


var objeto= {nombre:"pedro",edad:20};
var objeto2= {nombre:"pedro",edad:30};
console.group();
console.log(objeto);
console.log(objeto2);
console.groupEnd();


// typeof 
typeof "juan"; 

//true y false
console.log(!true); // false
console.log(!false); // true
console.log(!!true); // true
console.log(!!false); // false



var port = "proccess.env.port" || 5000;
console.log(port);


var libroAngular = {
  titulo: ' Desarollo Web Agil con AngularJS',
  autor: 'Carlos Azaustre',
  paginas: 64,
  formatos: ["PDF", "ePub", "Mobi"],
  precio: 2.79,
  publicado: false
};

// llamar a los object sobre la nombre de la variable + clase
  libroAngular.titulo;
  libroAngular.paginas;

  // cambiar valor o modificar clases
  libroAngular.precio = 2.20;
  libroAngular['publicado'] = true;
   
  // Acceder con Array

  var propiedad = "autor"; 
  libroAngular[propiedad];

 //crear dentro de un objecto funciones e invocarlas

var libroAngular2 = {
  Paginas: 265, 
  leer : function() {
      console.log("He leido el libro de AngularJS");
  }
};

libroAngular2.leer();

// crear objecto
var miObjectz = {medida: "1.2"};
var miObject = new Object({medida: "1.2"});

