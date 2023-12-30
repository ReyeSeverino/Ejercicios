////////////////////////
                                    // // variables
// var a = 1;
// var b = "Carlos";


                                 // diferentes console 
// console.log(a);
// console.warn(a);
// console.error(a);
// console.info(a);
/////////////////////////

                                    ///////////undefined///////////////
// console.log(a);
// console.log(b);
// console.log(c);

// var a = "Carlos";
// var b = 3;
// var c = true;

// console.log(a);
// console.log(b);
// console.log(c);
////////////////////////////

                                    ////////////Escritura dinamica Tipos Primitivos////////////////

                                                    //datos de tipos primitivos//
// var num = 10;
// var str = "texto";
// var bol = true;
// var und = undefined;
// var nul = null;

// console.log(num);

// num = str;

// console.log(num);

// bol = 10;

// console.log(bol);

                                // objetos puede tener datos primitivos y objetos a la vez//
// var obj = {
//     numero: 10,
//     texto: "Nuevo texto",
                             //se puede agregar otro objeto, pero el objeto padre debe terminar en coma( , ).
//     objHijo: {
//         numero2: 20,
//         text2: "Nuevo texto 2"
//     }
// };

// console.log(obj);

                                /////////por valor o por referencia//////

                                //las variables primitivas se pasan por valor////

// var a = "Carlos";
// var b = 10;
// var c = true;
// var d = "///////////////////";

// console.log("a =>", a);
// console.log("b =>", b);
// console.log("c =>", c);
// console.log(d);

// a = false;
// c = "apodo";
// b = b * 10;

// console.log("a =>", a);
// console.log("b =>", b);
// console.log("c =>", c);
// console.log(d, a);

//                                         ///// Usar un variable temporal para usar los valores anteriores o sin perdida d0el valor anterior al cambio realizado a la variable, para aplicarlo mas a delante a otra variable.
// {
//     let anteriorValorDeC = c;
//     c = a;
//     a = b/10;
//     b = anteriorValorDeC;
// }

// console.log("a =>", a);
// console.log("b =>", b);
// console.log("c =>", c);
// console.log(d);

                                //////los objetos se pasan por referencia////

                ///////para acceder a los datos de otro objeto/s se utiliza la notacion de puntos/////
// var c = {
//     nombre: "Carlos",
//     apellido: "Reyes",
//     edad: 24
    
// }
// var d = c;

// console.log("c ", c);
// console.log("d ", d);

//                                     ////ESTO ES LA NOTACION DE PUNTOS////
// c.nombre = "Maria";

// console.log("c ", c);
// console.log("d ", d);
//                                     // podemos agregar elementos a un objeto mediante la notacion de punto desde fuera
// c.carro = "Honda fit";
// d.edad = 25;

// console.log("c ", c);
// console.log("d ", d);

// c.apellido = "Severino";

// console.log("c ", c);
// console.log("d ", d);


                                    ////en los objetos siempre se pasaran por referencia. Esto porque ocuparan o apuntan a un mismo espacio de memoria.////

// class NumeroX {
//     constructor(id, numero) {
//         this.Id = id;
//         this.Numero = numero;
//     }

//     MuestraNumero() {
//         console.log(this.Id, this.Numero);
//     }

//     Copiar() {
//         return new NumeroX(this.Id, this.Numero);
//     }
// }
//                                                 /// para agregar o instanciar un  nuevo objeto en memoria usamos la palabra new, aunque este use los mismos valores de otros objetos este no tomara la referencia sino que copiara sus valores. 


// var x = new NumeroX(1, 10);
// var xRef = x;
// var y = x.Copiar();
// var z = new NumeroX(x.Id, y.Numero);

// x.MuestraNumero();
// xRef.MuestraNumero();
// y.MuestraNumero();
// z.MuestraNumero();
// console.log(" ");

// x.Numero = 11;
// xRef.Id = 2;
// y.Id = 3;

// z.Id = 4;
// z.Numero = 12;


// x.MuestraNumero();
// xRef.MuestraNumero();
// y.MuestraNumero();
// z.MuestraNumero();
// console.log(" ");

// class CasaM {
//     constructor(id, nombre) {
//         this.Id = id;
//         this.Text = nombre;
//     }

//     MuestraMarerial() {
//         console.log(this.Id, this.Text);
//     }

//     Duplicado() {
//         return new CasaM(this.Id, this.Text);
//     }
// }

// var h = new CasaM(1, 'arena');
// var hCopy = h;
// var g = h.Duplicado();
// var j = new CasaM(hCopy.Id, g.Text);

// h.MuestraMarerial();
// hCopy.MuestraMarerial();
// g.MuestraMarerial();
// j.MuestraMarerial();
// console.log(" ");

// h.Text = 'semento';
// hCopy.Id = 5;
// g.Text = 'barilla';

// j.Id = 12;
// j.Text = 'puertas'

// h.MuestraMarerial();
// hCopy.MuestraMarerial();
// g.MuestraMarerial();
// j.MuestraMarerial();

                           /////// notacion de puntos y corchetes////////

// var persona = {
//     nombre: "Juan",
//     apellido: "Herrera",
//     edad: 25,
//     direccion: {
//         Pais: "Puerto Rico",
//         ciudad: "San Juan",
//         edificio: {
//             nombre: "Edicio Don Camilo",
//             telefono: "405-649-4646"
//         }
//     }
// };

                        //por medio de la notacion de puntos podemos aceder y obtener un valor en especifico unicamete de los diferentes datos de los objetos, o agregar mas en un objeto en especifico.

// console.log( persona.direccion.Pais );
// console.log( persona.direccion );

                       //para agregar un elemento a un objeto

// persona.direccion.zipcode = 11101;
// console.log( persona.direccion.zipcode );

// console.log( persona.direccion.edificio.telefono );

                        //podemos trabajar con un solo objeto por medio de la referencia que tiene los objetos. y podemos trabajar con los datos de ellos sin tener que aceder por la notacion, si solo queremos trabajar con uno si es muy estenso

// var edificio = persona.direccion.edificio;

// edificio.nopiso = "8vo piso";

// console.log( persona );

////notacion de corchete

                        //es parctica, pero no estan comun cuando queremos acesar valores directamente que sabemos que no cambiaran, pero es muy utilizada cuando queremos ocupar datos de manera dinamica

// var campo = "";
                        //si queremos obtener el nombre en este ejemplo

// console.log( persona["nombre"] );
// console.log( persona["direccion"]["Pais"] );

                        //de esta manera en ves de poner la variable vacia solo ponemos lo que quermos que se muestre en la variable y le pasamos la variable en ves de un estring a el console.log

// var campo = ("edad");
                            // Eje: var campo = "edad2"; en caso de no poner el valor bien nos devolera undefined
// console.log( persona[campo] );

                            //////funcines////
// var a = 50;
//                             // si tenemos una variable global con el mismo nombre de una variable que esta dentro de una funcion, la funcion siempre tomara el valor de la variable que contenga dentro
// function primeraFuncion() {
//     var a = 20;
//     console.log(a);
// }

//                         //en caso de esta no tener una variable definida tomara el valor de la variable global

// function segundaFuncion() {
//     console.log(a);
// }

//                         //si una fuicion no tiene la variable definida dentro de la misma o en el objeto global, sino por debajo de esta hasta cuando se llama devulbe el valor undefined.
//                         // de igul manera si no tiene nada dentro de la funcion y la llamamos nos devolbera undefined.

// function terceraFuncion() {
//     console.log(variavleDeLaTeceraF);
// }

// var cuartaF = 80;
//                             //podemos llamar o inbocar una funcion antes de ser definida. lo que hace es que va donde esta la funcion y la ejecuta y luego regresa para seguir leyendo el codigo le que seguia despues de la invocacion.
// cuartaFuncion();
//                             // para llamar una funcion usamos el mismo nombre con el que la definimos, seguido de parentesias
// primeraFuncion();
// segundaFuncion();
// terceraFuncion();
// var variavleDeLaTeceraF = 50;

// function cuartaFuncion() {
//     console.log(cuartaF);
// }

                            //////parametro de las funciones
// la funciones son objetos.

//los parametros de las funciones pueden ser objetos, variables primitivas y hasta otras funciones.

// function imprimir(nombre, apellido) {
//     apellido = apellido || "XXX";
//     // if (apellido === undefined) {
//     //    apellido = "xxx"; 
//     // }
//     console.log(nombre +" "+ apellido);
// }
//los parametros se les pasa entre los parentesis.
//para pasarle otro parameo lo separamos por coma.
// con === se hace una igualacion entre el objeto y el valor para saber si son lo mismo. otra manera de comprobar es con || que dice si apellido es igual a apellido toma ese o sino toma este estring"".

// var nombre = "Juan";
                            //es una variable explisita. 

// imprimir("Juan", "padilla");
                                //entre los parentesis le pasaremos una variable anonima, es una variable anonima porque no esta explisitamente en la funcion, sino que la estamos creando en el momento de inbocar la funcion.

// imprimir("Juan");
                                 //si ponemos el parametro en la funcion de una variable primitiva y no le pasamos el valor nos devolvera undefined, esto porque ya recervamos el espacio en memoria y su valor si no le asignamos otro sera el de por defesto que es undefined.

// function imprimir(persona) {
//     console.log(persona.nombre +" "+ persona.apellido);
// }

                                    //de igual manera como las variables anomimas podemos crear objetos anomimos al momento de llamar una funcion.

// imprimir({
//     nombre: "Jorge",
//     apellido: "Rodriguez"

// });

// var obj = {
//     nombre: "Jorge",
//     apellido: "Rodriguez"
// }

                            //se puede definir el ojetos antes de mardarlo tambien,y ese objeto se mandaria a la funcion, tomando asi el nombre del parametro de la funcion dentro de esta.
// imprimir(obj);

                             ///podemos mandar funciones por parametros a otra funcion
// function imprimir(fn) {
//     fn();
// }

                                //funcion explisita
// var miFuncion = function() {
//     console.log("miFuncion");
// }

// imprimir(miFuncion);

                                // las funcione al igual que los objetos y la variables pueden ser anonimas.

// imprimir(function() {
//     console.log("funcion anonima");
// });

                        /////////// EL RETORNO DE LAS FUNCIONES////////////////////

//                             //funcion que retorna numero.
// function obtenerAleatorio() {
//     return Math.random();
// }

// // console.log(obtenerAleatorio() + 10 );

//                                 //fn que retorna un estring.
// function obtenerNombre() {
//     return "Juan";
// }

// // var nombre = obtenerNombre();
// // console.log(nombre);

//                                 //fn que retorna boolean.
// function esMayor05() {
//     if (obtenerAleatorio() > 0.5) {
//         return true;
//     }else{
//         return false;
//     }
// }

// // console.log(esMayor05());

// if(esMayor05()) {
//     console.log("Es mayor a 0.5");
// }else{
// console.log("Es menor a 0.5");

// }
//                                             //fn que retorna un objeto, en las funciones los ojetos los podemos retornar explisitos o anonimos.
// function crearPersona(nombre, apellido) {
//     //objeto explisito
//     // var obj = {};

//     //obeto anomimo
//     return {
//         //notacionde pares.
//         //nombre o indicativo: valor.
//         nombre: nombre,
//         apellido: apellido
//     }
    
// }

// var persona = crearPersona("maria", "Paz");
// // console.log(persona.nombre);
// // console.log(persona.apellido);

//                                 //fn que retornan fn.
// function creaFuncion() {
//     return function(nombre) {
//         console.log("Me creo "+ nombre);
//         return function() {
//             console.log("segunda funcion");
//         }
//     }
// }

// var nuevaFuncion = creaFuncion();
// var segundaFuncion = nuevaFuncion(persona.nombre);
// segundaFuncion();

///////////FUNCIONES DE PRIMERA CLASE/////////

// function a() {
//     console.log("Funcion a");
// }

// a();
//                     //a las funciones le podemos poner cualquier cosa como a las de un objeto, como propiedades y metodos.

//                     //propiedades.
// a.apply = "Maria";
// a.direccion = {
//     pais: "Costa Rica",
//     ciudad: "San Joisé",
//     edificio: {
//         piso: "8vo",
//         nombre: "Edificio principal"
//     }
// }

////////////METODOS Y EL OBJETO THIS//////////////

///los metodos no es mas que funciones dentro del objeto.

// var persona = {
//     nombre: "Maria",
//     apellido: "Dubon",
//     imprimirNombre: function() {
//         // console.log("Nombre completo");
//         console.log(this.nombre + " " + this.apellido);
//     },
//     direccion: {
//         pais: "Costa Rica",
//         obtenerPais: function() {
//             // console.log(this);
//             var self = this;

//             var nuevaDireccion = function() {
//                 //aqui el objeto apunta a el windows.
//                 // console.log(this);

//                 //si pasamos el valor de una variable declarada en el objeto donde queremos que this apuente mostrara el valor que queremos.
//                 console.log(self);
//                 console.log("La direccion es en " + self.pais);
//             }

//             nuevaDireccion();
//         }
//     }
// };
// // persona.nombre = "Andres";
// persona.imprimirNombre();
// persona.direccion.obtenerPais();

////////////////////LA PALABRA NEW //////////////////

//la letra "P" en mayuscula es indicativo de que la funcion que estamos instanciando es una clase, o funcion de primera clase.

function Persona(nombre, apellido) {
                    //parametros
    this.nombre = nombre;
    this.apellido = apellido;

                        //propiedades
    // this.nombre = "Carlos";
    // this.apellido = "Mendoza";
    this.edad = "24";

    // console.log("paso por aqui");

                        //metodos
    this.imprimirPersona = function() {
        return this.nombre +" "+ this.apellido +" ("+ this.edad + ")";
    }
}

                //objeto vacio.
// var carlos = {};

                    //cuendo creamos un objeto nesesita que le espesifiquemos de que tipo es que lo queremos.
                    //de esta manera nos da un undefined.
// var carlos = Persona();

                    //objeto vacio de tipo persona, cuando ponemos new.
// var carlos = new Persona();

                    //con esto instanciamos que la variable respondera a la funcion que queremos, al usar new la funcion toma una forma paresida a una clase informal.



                        //invocandola por parmetros
var carlos = new Persona("Carlos", "Mendoza");

// console.log(carlos);
// console.log(carlos.nombre);
console.log(carlos.imprimirPersona());











