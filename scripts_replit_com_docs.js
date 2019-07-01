typeof "juan"; 

console.log(!true);
console.log(!false);
console.log(!!true);
console.log(!!false);



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
var miObject = new object({medida: "1.2"});

------------------------------------------------------------
script2

var miArray = [1, 2, 3, 4];
miArray.length;
console.log(miArray[3]);


var tom = Math.pow(2,6);
document.write(tom);
// ---------------------------------------------------------------------------------------------------------

var caos = prompt("digite el caso que desea probar");

switch(caos){
  case "1":
    document.write("nmms1");
    break;
  
  default: 
    document.write("Falling in the down");
    break;
}


// Bucles
var nombre = prompt("¿Cual es su nombre?");
veces = prompt("¿Cuantas veces quiere que se repita?");
var contador;

for(contador = 0;contador<= veces;contador++){
  console.log(nombre);
}

// ---------------------------------------------------------------------------------------------------------

for(var i=1;i<20;i++){
  document.write(i++ + "\n");
}

for(var i=0;i<9;i++){
  document.write(i + "<br>");
} 

var luto = prompt("Digite el dato");

if(luto == 1){
  console.log(luto);
}

for(var i=0;i<=luto;i++){
  console.log(dutos[0]);
  console.log(dutos[1]);
  console.log(dutos[2]);
  console.log(dutos[3]);
  console.log(dutos[4]);
  console.log(dutos[5]);
  console.log(dutos[6]);
  console.log(dutos[7]);
  console.log(dutos[8]);
  console.log(dutos[9]);


}
function root(){
for(var i =0;i<14;i++){
  document.write(i++ + "\n");
}
  }

var dutos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


var a = 2;
var b = 8;
var c = 4;



switch(dutos){
  case 1:
          if(a==1 || b==1 || c==1){
            console.log("1");
          }
      break;
  case 2:
          if(a==2 || b==2 || c==2){
            console.log("2");
          }
      break;
  case 3:
        if(a==3 || b==3 || c==3){
          console.log("3");
        }
      break;
  case 4:
        if(a==4 || b==4 || c==4){
          console.log("4");
        }
      break;
  case 5:
        if(a==5 || b==5 || c==5){
          cosole.log("5");
        }
      break;
  case 6:
        if(a==6 || b==6 || c==6){
          console.log("6");
        }
      break;
  case 7:
        if(a==7 || b==7 || c==7){
          console.log("7");
        }
      break;
  case 8:
        if(a==8 || b==8 || c==8){
        console.log("8");
      }
      break;
  case 9:
        if(a==9 || b==9 || c==9){
          console.log("9")
        }
      break;
  case 10: 
        if(a==10 || b==10 || c==10){
          console.log("10");
        }
      break;
  default:
      document.write("Dato no aceptado");
      break;    
    
} 

---------------------------------------------------------------------------------------------------------

var dutos = [1, 2, 3, 4, 5];

var a = 2;
var b = 8;
var c = 4

if(a==dutos[0] || a==dutos[1] || a==dutos[2] || a==dutos[3] || a==dutos[4] || a==dutos[5])
{
  console.log("hell");
}else{
  console.log("hl");
}

if(b==dutos[0] || b==dutos[1] || b==dutos[2] || b==dutos[3] || b==dutos[4] || b==dutos[5])
{
  console.log("hellroot");
}else{
  console.log("root32");
}

if(c==dutos[0] || c==dutos[1] || c==dutos[2] || c==dutos[3] || c==dutos[4] || c==dutos[5])
{
  console.log("hrte");
}else{
  console.log("df");
}

console.log(Math.pow(2, 6)); // 2 elevado a la 6 = 64 (POTENCIACION)

var lo = prompt("digite la base");
var ro = prompt("digite el exponente");

document.write(Math.pow(lo, ro));