// formas de importar todos los elementos de un fichero de JS.
import {Tarea, ListaDeTareas, Ejemplo, msg} from './Tareas.js';     // forma explisita.
// import * as T from './Tareas.js';                                // forma implisita.

// formas de instanciar una clase en algunos lenguajes.
// const ejemplo = new Ejemplo.constructor();   // forma explisita.
const ejemplo = new Ejemplo();                  // forma implisita.

// formas de aumentar un el valor de una variable contador en uno. 
let contador = undefined;
contador = new Number(10);
console.log("El valor del contador es:", contador);
console.log("El valor del contador se incremento a 1 (forma explisita)");
contador = contador + 1;    // forma explisita.
console.log("El valor del contador es:", contador);
console.log("El valor del contador se incremento a 1 (forma implisita)");
contador++;                 // forma implisita.
console.log("El valor del contador es:", contador);

// En python existe un ZEN que dice lo siguiente.
// Explisito es mejor que Implisito. (PED 20)

console.log(msg);
ImprinMensaje("hola word");


const program = new ListaDeTareas();


const tarea1 = new Tarea(1,"pendiente", false);
program.AgregarTarea(tarea1);
const tarea2 = new Tarea(2,"pendiente2", false);
program.AgregarTarea(tarea2);
const tarea3 = new Tarea(3, "hola", false);
program.AgregarTarea(tarea3);
const tarea5 = new Tarea(5, "hola mundo", false);
program.AgregarTarea(tarea5);

// agregando tareas dublicadas
program.AgregarTarea(tarea2);
console.log(program.listaDeTareas);

program.ElimarTarea(tarea1);
console.log(program.listaDeTareas);

program.MarcarTarea(tarea3);
console.log(program.listaDeTareas);

program.MarcarListaDeTareas();
console.log(program.listaDeTareas);