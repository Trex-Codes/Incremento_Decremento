function code(){
	var que = prompt("Mayor de edad, S/N");
	if(que == "S"){
		alert("Bienvenido, puede entrar");
	}else {
		alert("No puede entrar");
	}
}

window.onload = function(){
	var llam = document.getElementById("ROOT");
	llam.addEventListener("click",code,false);

}