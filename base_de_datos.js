var colegio = {
	estudiantes: "1000",
	profesores: "30",
	rector: "Jorgue Elfredo Gomez",
	sub_cordinador: "Camila lopez Quintero",

		cursos: {
				primaria: {
					A1: "35",
 					B1: "32",
 					A2: "45",
					B2: "43",
					A3: "42",
					B3: "35",
					A4: "34",
					B4: "38",
					A5: "25",
					B5: "43",
				},
					bachillerato: {
						A6: "32",
						B6: "42",
						A7: "43",
						B7: "45",
						A8: "34",
						B8: "45",
						A9: "35",
						B9: "43",
						A10: "30",
						B10: "26",
						A11: "19",
					}


		}
}

console.table(colegio);
console.log(colegio.profesores); //30
console.log(colegio.rector); // Jorgue Elfredo Gomez
console.log(colegio.sub_cordinador); // Camila lopez Quintero
console.log(colegio.estudiantes); //1000

// Primaria
console.log(colegio.cursos.primaria.A1); // 35
console.log(colegio.cursos.primaria.B1); // 32
console.log(colegio.cursos.primaria.A2); // 45
console.log(colegio.cursos.primaria.B2); // 43
console.log(colegio.cursos.primaria.A3); // 42
console.log(colegio.cursos.primaria.B3); // 35 
console.log(colegio.cursos.primaria.A4); // 34
console.log(colegio.cursos.primaria.B4); // 38
console.log(colegio.cursos.primaria.A5); // 25
console.log(colegio.cursos.primaria.B5); // 43

// Bachillerato
console.log(colegio.cursos.bachillerato.A6); // 32
console.log(colegio.cursos.bachillerato.B6); // 42
console.log(colegio.cursos.bachillerato.A7); // 43
console.log(colegio.cursos.bachillerato.B7); // 45
console.log(colegio.cursos.bachillerato.A8); // 34
console.log(colegio.cursos.bachillerato.B8); // 45 
console.log(colegio.cursos.bachillerato.A9); // 35
console.log(colegio.cursos.bachillerato.B9); // 43
console.log(colegio.cursos.bachillerato.A10); // 30
console.log(colegio.cursos.bachillerato.B10); // 26
console.log(colegio.cursos.bachillerato.A11); // 19

