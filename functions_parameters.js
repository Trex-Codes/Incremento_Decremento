function olin(){ // Nombre,Apellido,Edad,telefono)
	var name_prom = prompt("Diga cual es su nombre");
	var ape_prom = prompt("Diga cual es su apellido");
	var ed_prom = prompt("Diga cual es su edad");
	var tele_prom  = prompt("Diga cual es su numero de telefono");
	return "su nombre es: " + name_prom + "su apellido es: " + ape_prom + "sua edad es: " + ed_prom + "Su telefono eS: " +  tele_prom;
}

alert(olin());

function root(){
	storage = {
		for1: "a",
		for2: "b",
	}
	return storage.for1 + "\n" + storage.for2;
}

console.log(root());

function form(nombre,edad,celular){
	var name = nombre;
	var year = edad;
	var cell = celular;
	return name;
	return year;
	return cell;
}

console.log(form("Aida" + " " +  "23" + " " + "Samsung"));