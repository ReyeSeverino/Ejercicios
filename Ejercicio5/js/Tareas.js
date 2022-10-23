export class Tarea {
    constructor(id, nombre, completada) {
        this.id = id;
        this.nombre = nombre;
        this.completada = completada;
    }
}


export class ListaDeTareas {
    
    constructor() {
        this.listaDeTareas = new Array();
    }

    AgregarTarea(tarea) {
        this.listaDeTareas.push(tarea);
    };

    ElimarTarea(tarea) {
        // metodo uno. elimina uno a uno los elementos
        // let indiceTarea = this.listaDeTareas.findIndex((t) => t.id === tarea.id);
        // if (indiceTarea < 0) return;

        // this.listaDeTareas.splice(indiceTarea, 1);

        // metodo dos. elimin todos los elementos de un golpe los que cumplan con el filtro (filter)
        this.listaDeTareas = this.listaDeTareas.filter(t => t.id !== tarea.id);
    }

    MarcarTarea(tarea) {
      document.querySelector('#marcarTarea');
    } 

    MarcarListaDeTareas(tarea) {
      document.querySelectorAll('div.tareaP > label');
    } 
}

export class Ejemplo {
    constructor() {
        ImprinMensaje("Soy una instancia de la clase Ejemplo!");
    }
}

function ImprinMensaje(msg) {
    console.log(msg);
}

export var msg = "Hola por este lado"