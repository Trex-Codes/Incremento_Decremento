x = 0;
// var numero = 6; 
// var numero = new numero(6);

// Parseint 
parseInt("1111", 2); // Devuelve 15

// parsefloat -> analiza numero flotante y devuelve representacion decimal
parseFloat(5e3); // number 5000

// number.tofixed(x) -> redondear el numero
var n = 3.2342;
n.toFixed(0); // devuelve 3
n.toFixed(2); // devuelve 3.24

// number.toString(); -> devuelve String con el numero equivalente number
(1111).toString(10); // 1111
(15).toString(2); // 1111

// Modulo Math -> permite operaciones matematicas
Math.PI // 3.1416
Math.E // numero e = 2.7182818
Math.random() // Numero aleatorio entre 0 y 1
Math.pow(2,6) // 2 elevado a la 6 = 64 (POTENCIACION)
Math.sqrt(4) // Raiz cuadrada de 4 = 2 (RADICACION)
Math.min(1,3,4,6) // Devuelve valor mas minimo del conjunto = 1
Math.max(2,4,5,6,7) //  Devuelve  valor mas maximo del conjunto = 7
Math.floor(6.5) // Devuelve la parte entera mas minima por debajo = 6
Math.ceil(6.5) // DEvuelve la parte entera mas maxima por encima = 7
Math.round(6.4) // Redondea la parte entera mas proxima = 6
Math.abs(x); // Devuelve valor absoluto de un numero;

// FUNCIONES TRIGOMETRICAS
Math.sin(x); // Funcion seno
Math.cos(x); // Funcion coseno 
Math.tan(x); // funcion  tangente 
Math.log(x); // Funcion algoritmo

var miArray = [1, 2, 3, 4];
miArray.length;
console.log(miArray[3]);


var tom = Math.pow(2,6);
document.write(tom);


