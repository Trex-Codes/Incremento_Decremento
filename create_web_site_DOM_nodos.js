// h1 title cente page 
var h1_title = document.createElement("h1");
var content_h1 = document.createTextNode("Titulo Principal del WebSite");
h1_title.appendChild(content_h1);
document.body.appendChild(h1_title);

	// <hr>
	var hr_line = document.createElement("hr");
	document.body.appendChild(hr_line);

// h2 sub-title izquierda page 

var h2_subtitle1 = document.createElement("h2");
var content_h2_1 = document.createTextNode("Subtitulo 1");
h2_subtitle1.appendChild(content_h2_1);
document.body.appendChild(h2_subtitle1);

// h2 sub-title center page 

var h2_subtitle2 = document.createElement("h2");
var content_h2_2 = document.createTextNode("Subtitulo 2");
h2_subtitle2.appendChild(content_h2_2);
document.body.appendChild(h2_subtitle2);

// h2 sub-title derecha page 

var h2_subtitle3 = document.createElement("h2");
var content_h2_3 = document.createTextNode("Subtitulo 3");
h2_subtitle3.append(content_h2_3);
document.body.append(h2_subtitle3);

// p con onclick cambia de color 
document.getElementById("colrs");
function cambio_color(){
	var cambio = backgroundColor = red;
	return cambio;
}