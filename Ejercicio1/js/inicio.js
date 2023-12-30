let validarClave = () => {
    var clave = document.getElementById('clave').value;
    var error = "";

    if (clave.length < 4)
    {
        error = "la contraseña es menor de 4 caracteres";
    }
    else if(clave.length > 16)
    {
        error = "la contraseña es mayor de 16 caracteres";
    };
    // poner validacion de que la clave tenga almenos un numero.

    document.getElementById('errorClave').innerText = error;
};

let inicioSecion = () => {
    var correo = document.getElementById('correo').value;
    var clave = document.getElementById('clave').value;

    console.log(correo, clave);
}

let muestra_mensaje = (mensaje) => {
    // alert(mensaje);
    return mensaje;
};

window.onload = () => {
    muestra_mensaje("Hola desde inicio.js")
};
muestra_mensaje("yo pase por aqui")

