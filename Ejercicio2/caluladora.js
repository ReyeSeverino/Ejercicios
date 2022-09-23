function sumar() {
    var num1 = Number(document.getElementById("num1").value); 
    var num2 = Number(document.getElementById("num2").value); 

    document.getElementById('resultado').innerText = num1 + num2;
}

function restar() {
    var num1 = Number(document.getElementById("num1").value); 
    var num2 = Number(document.getElementById("num2").value); 

    document.getElementById('resultado').innerText = num1 - num2;
}

function multiplicar() {
    var num1 = Number(document.getElementById("num1").value); 
    var num2 = Number(document.getElementById("num2").value); 

    document.getElementById('resultado').innerText = num1 * num2;
}

function dividir() {
    var num1 = Number(document.getElementById("num1").value); 
    var num2 = Number(document.getElementById("num2").value); 

    document.getElementById('resultado').innerText = num1 / num2;
}
