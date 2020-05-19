// Arrow functions 
// Una función de flecha en Javascript es una alternativa para declarar una función de una forma más sencilla.

// Esta sintáxis see introduce en ES6. 

Función 
full_name = function() {
	return "Mario Pérez";
}

Funcion de flecha 
full_name = () => {
	return "Mario Pérez";
}

// ------- Parámetros --------
// Podemos enviar nuestros Parámetros incluyéndolos dentro de los paréntesis igual que en las funciones tradicionales

power2 = (n) = n*n;

// Si sólo es un parámetro también podemos omitir los paréntesis

let squared = [1, 2, 3].map(n => n*n);
// [1, 4, 9]

// ------- One-liner -------
// si la función sólo tiene una sentencia y regresa un valor directamente, se puede en una sola línea omitiendo la palabra return y eliminado los braquets

Función 
full_name = function() {
	return "Mario Pérez";
}

Función de flecha 
full_name = () => "Mario Peréz";