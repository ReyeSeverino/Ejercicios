function validarFormulario(inputId) {
    var inputValue = $(inputId).value;

    var error = "";
    if (!inputValue) error = "El compo de " + inputId + " no puede estar vacio";

    switch (inputId) {
        case 'usuario':
            if (inputValue.length >= 1 && inputValue.length < 5) {
                error = "el nombre de usuario debe tener de 5 o mas caracteres";
            }
            break;

        case 'clave':
            if (inputValue.length >= 1 && inputValue.length < 4) {
                error = "la contraseña es menor de 4 caracteres";
            }
            else if (inputValue.length > 16) {
                error = "la contraseña es mayor de 16 caracteres";
            };
            break;

        default:
            console.log('validarFormulario error: id no valido.')
            break;
    }

    $(inputId + 'Span').innerText = error;
};

function inicioSecion() {
    var usuario = $('usuario').value;
    var clave = $('clave').value;

    console.log(usuario, clave);
}

function $(selector) {
    return document.getElementById(selector);
}
