const minimoInicio=10;
const maximoInicio=1000;
const minimo=1;
var maximo=0;
var ubicacionTesoro=0;
var intentos=10;

function generarNumeroAzar(min, max) {
    return Math.floor( Math.random() * (max-min + 1 ) + min);
}

function iniciarJuego() {
    maximo = Number(document.getElementById("numero").value);
    intentos=10;
    document.getElementById("numero").value = "";
    if (maximo < minimoInicio || maximo > maximoInicio) {

        document.getElementById('numeroSpan').innerText = "El numero no puede ser menor que " + minimoInicio + " o mayor que " + maximoInicio;
        return;
    } else {
        document.getElementById('numeroSpan').innerText = "";
        modifyPlaceHolder(maximo);
    }
    ubicacionTesoro = generarNumeroAzar(minimo, maximo);

    document.getElementById("botonJuego").onclick = encuentraTesoro;

    document.getElementById("botonJuego").innerText = "encontrar tesoro";

    document.getElementById("informacion").innerHTML = 'El juego ha iniciado.';

    document.getElementById("intentos").innerText = 'Tienes ' + intentos + ' para encontrar el tesoro!';

};

function encuentraTesoro() {
    var inputId = "numero";
    var numValue = document.getElementById(inputId).value;
    document.getElementById("numero").value = "";
    var error = "";

    if (!numValue) {
        error = "El compo de " + inputId + " no puede estar vacio.";

        document.getElementById(inputId + 'Span').innerText = error;
        return;

    } else if (numValue < minimo) {
        document.getElementById('numeroSpan').innerText = "El numero no puede ser menor que " + minimo;
        return;

    } else if (numValue > maximo) {
        document.getElementById('numeroSpan').innerText = "El numero no puede ser mayor que " + maximo;
        return;

    } else {
        document.getElementById('numeroSpan').innerText = "";
    }

    intentos--;

    if(numValue > ubicacionTesoro) {

        document.getElementById('numeroSpan').innerText = "te pasaste, el tesoro esta mas atras de ti.";

    } else if (numValue < ubicacionTesoro) {

        document.getElementById('numeroSpan').innerText = "aun te falta camino por recorrer.";

    } else {
        alert("Has encontrado el tesoro!.");
        document.getElementById('numeroSpan').innerText = "Has encontrado el tesoro!";

        document.getElementById("botonJuego").onclick = reiniciarJuego;

        document.getElementById("botonJuego").innerText = "reiniciar juego?";
        return;
    };

    if (intentos!= 0){
        document.getElementById('intentos').innerText = 'Te quedan '+ intentos +' intentos de 10.';
    } else {
        document.getElementById('intentos').innerText = 'has agotado tus intentos!';

        alert ('haz agotado los intentos, el tesoro estaba en '+ubicacionTesoro);

        document.getElementById("botonJuego").onclick = reiniciarJuego;

        document.getElementById("botonJuego").innerText = "reiniciar juego?";
    }
}

function modifyPlaceHolder(maximo) {
    let input = document.getElementById("numero");

    input.placeholder = " Escribe un numero entre " +  minimoInicio + " y " + maximoInicio;

}

function reiniciarJuego() {
    document.getElementById("numero").value = minimoInicio;

    document.getElementById("informacion").innerHTML = 'Has click para iniciar el juego.';

    document.getElementById('numeroSpan').innerText = "";

    document.getElementById('intentos').innerText = "";

    document.getElementById("botonJuego").onclick = iniciarJuego;

    document.getElementById("botonJuego").innerText = "iniciar el juego";
}
