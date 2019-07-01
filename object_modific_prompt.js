// function destin(){
  

// oject_almac = {
//   objec1:12,
//   objec2: true,
//   objec3: "Juan",
  
//   }

  
// // Imprime primero los datos de el objecto

// console.log(oject_almac.objec1);
// console.log(oject_almac.objec2);
// console.log(oject_almac.objec3);

// alert(oject_almac.objec1);
// alert(oject_almac.objec2);
// alert(oject_almac.objec3);



// // luego los modifica con datos del prompt

//   var questobje1 = prompt("cual desea q sea el primer dato");
//   var questobje2 = prompt("cual desea q sea el segundo dato");
//   var questobje3 = prompt("cual desea q sea el tercer dato");
  

//   oject_almac.objec1 = questobje1;
//   console.log(oject_almac.objec1);

//   oject_almac.objec2 = questobje2;
//   console.log(oject_almac.objec2);

//   oject_almac.objec3 = questobje3;
//   console.log(oject_almac.objec3);

// }

// destin();


/* Se declara objecto con datos enteros y  por la 
desicion que tome el cliente por por prompt(switch)
escoge si se (+,-,*,/) */


num_datos = {
  dato1: 12,
  dato2: 30,
  dato3: 25,
  dato4: 89,
  dato5: 34,
}

var data_object_prop = prompt("Que propiedad del objecto desea utilizar")
var pont_dataobten_object = prompt("Digite 1 para sumar/ 2 para restar/ 3 para multiplicar/ 4 para dividir");
var data_cantidad_operacion = prompt("Por cuanto digito desea realizar la operacion");


if(data_object_prop == "1"){
  console.log(num_datos.dato1);

  switch (pont_dataobten_object) {
    case "1":
        console.log("suma");
          var conduc_1 = parseInt(num_datos.dato1)+parseInt(+data_cantidad_operacion);
            console.log(conduc_1);
      break;

      case "2":
          console.log("Resta");
            var conduc_2 = num_datos.dato1-data_cantidad_operacion;
              console.log(conduc_2);
      break;

      case "3":
          console.log("Multiplicacion");
            var conduc_3 = num_datos.dato1*data_cantidad_operacion;
              console.log(conduc_3);
      break;

      case "4":
          console.log("Division");
            var conduc_4 = num_datos.dato1/data_cantidad_operacion;
              console.log(conduc_4);
      break;

    default:
        console.log("Data no avaliable!!");
      break;
  }
}



















// switch (pont_dataobten_object) {
//   case "1":
//         console.log("suma");
//         var conduc_1 = num_datos.dato1*data_cantidad_operacion;
//         console.log(conduc_1);
//     break;

//     case"2":
//       console.log("Resta");
//       var c
//     break;
// }