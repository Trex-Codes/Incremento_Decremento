// window.alert("Hello world");
// window.confirm("QUE PASO");


document.getElementsByName("root_name");
document.getElementsByClassName("root_class");
document.getElementById("root_id");

document.getElementsByTagName("p");

// Crear Nodos

var parrafo = document.createElement("p");
var texto = document.createTextNode("Texto creado");
parrafo.appendChild(texto);
document.body.appendChild(parrafo);

// elinar Nodos

// var parrafo = document.getElementById("texto");
// parrafo.parentNode.removeChild(parrafo);

// agregar eventos a elementos desde JS
function MonstarSaludo(){
	alert("Hello world!");
}

window.onload = function(){
	var texto = document.getElementById("idenvet");
	texto.addEventListener("click",MonstarSaludo,false);
}