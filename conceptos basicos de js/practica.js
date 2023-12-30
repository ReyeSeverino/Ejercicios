// console.log("////////////PRACTICA////////////");
// console.log("////////////METODO Y OBJETO THIS////////////");

// var persona = {
//     normbre: "Camilo",
//     apellido: "Reyes",
//     printPresona: function() {
//         console.log(this.normbre +" "+ this.apellido);
//     },
//     direccion: {
//         pais: "Rep. Dom.",
//         ciudad: "Santo Domingo",
//         obtenerDireccion: function(){
//             console.log(this.ciudad);

//                 var lugar = this;

//             var obtenerPais = function() {
//                 console.log(lugar.pais);
//             }
//             // obtenerPais();
//         }
//     },
//     otraInfo: {
//         edad: "25",
//         telefono: "465-456-4651",
//         obtenerOtraInfo: function() {
//             console.log(this.edad);

//             var movil = this;
            
//             var obtenerCell = function() {
//                 console.log(movil.telefono);
//             }
//             // obtenerCell();
//         }
//     }
// };

// // persona.printPresona();
// // persona.direccion.obtenerDireccion();
// // persona.otraInfo.obtenerOtraInfo();

// console.log("////////////PRACTICA////////////");
// console.log("////////////LA PALABRA NEW////////////");


// function Personaje1(nombre, poder) {
//     this.nombre = nombre;
//     this.poder = poder;
    
//     this.infoPersonaje1 = function() {
//         return (this.nombre+" "+this.poder);
//     }
// };

// function Personaje2(nombre,poder) {
//     this.nombre = nombre;
//     this.poder = poder;
    
//     this.infoPersonaje2 = function () {
//         return (this.nombre+" "+this.poder);
//     }
// };

// var obj1 = new Personaje1("Naturo", "150");
// var obj2 = new Personaje2("Sacke", "125");
// console.log(obj1.infoPersonaje1());

// console.log(obj2.infoPersonaje2());

console.log("////////////PRACTICA////////////");
console.log("////////////GAME////////////");


function Jugador(nombre) {
    this.nombre = nombre;
    this.pv = 100;
    this.sp = 100;

    this.curar = function(jugadorObjetivo) {

        if (this.sp >= 40){
            this.sp -= 40;
            jugadorObjetivo.pv += 20;

        }else{
            console.info(this.nombre + " no tiene sp");
        }
        this.estado(jugadorObjetivo);
    }

    this.tirarPoder = function(jugadorObjetivo) {
        if (jugadorObjetivo.pv > 40){
            jugadorObjetivo.pv -= 40;
            
        }else{
            jugadorObjetivo.pv = 0;

            console.error(jugadorObjetivo.nombre+ " fue derrotado!!!");
        }
        this.estado(jugadorObjetivo);

    }

    this.estado = function(jugadorObjetivo) {
        console.info(this);
        console.info(jugadorObjetivo);
    }
};

var naruto = new Jugador("Naruto");
var sacke = new Jugador("Sacke");

console.log(naruto);
console.log(sacke);

naruto.curar(sacke);

