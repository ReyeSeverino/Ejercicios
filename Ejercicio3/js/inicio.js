function valueForm(Inputid) {
    var input = document.getElementById('Inputid').value;
    // var clave = document.getElementById('clave').value;

    var error = "";
    var error2 ="";

    if (usuario.length < 5)
    {
        error = "el nombre de usuario debe tener de 5 o mas caracteres";

    }
    else if (usuario.length === "")
    {
        error = "este espacio no puede estar vacio"
    };

    if (clave.length < 4)
    {
        error2 = "la contraseña es menor de 4 caracteres";
    }
    else if(clave.length > 16)
    {
        error2 = "la contraseña es mayor de 16 caracteres";
    };
    // poner validacion de que la clave tenga almenos un numero.

    document.getElementById('errorUsuario').innerText = error;
    document.getElementById('errorClave').innerText = error2;
};

let inicioSecion = () => {
    var usuario = document.getElementById('usuario').value;
    var clave = document.getElementById('clave').value;

    console.log(usuario, clave);
}

let muestra_mensaje = (mensaje) => { 
    // alert(mensaje);
    return mensaje;
};

window.onload = () => {
    muestra_mensaje("Hola desde inicio.js")
};
muestra_mensaje("yo pase por aqui")

