function encuentraElTesoro(inputId) {
    var inputValue = $(inputId).value;
   
    var error = "";
    if (!inputValue) error = "Introduce un numero para iniciar el juego.";
    
    switch (inputId) {
        case 'numero':
            if (inputValue.length <= 10) {
                function numeroAlAzar (min, max){
                    return Math.floor( Math.random() * (min-max + 1 ) + min);
                    
                }
                console.log( numeroAlAzar(min, max));
            }
            break;

        case 'numero':
            if (inputValue.length > 10) {
                error = "Debe ser un numero mayor de 10.";
            }
            break;

        case 'numero':
            if (inputValue.length === max) {
                error = "Debe ser un numero mayor de 10.";
            }
            break;

        default:
            console.log('error: debes introducir un numero.')
            break;
    }

    $(inputId + 'Span').innertext = error;
};

function $(selector) {
     return document.getElementById(selector);
}
