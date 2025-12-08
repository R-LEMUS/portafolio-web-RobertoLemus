function sumar() {
    var num1 = parseFloat(document.getElementById("num1").value) || 0;
    var num2 = parseFloat(document.getElementById("num2").value) || 0;
    var resultado = num1 + num2;
    document.getElementById("resultado").value = resultado;
}

function restar() {
    var num1 = parseFloat(document.getElementById("num1").value) || 0;
    var num2 = parseFloat(document.getElementById("num2").value) || 0;
    var resultado = num1 - num2;
    document.getElementById("resultado").value = resultado;
}

function multiplicar() {
    var num1 = parseFloat(document.getElementById("num1").value) || 0;
    var num2 = parseFloat(document.getElementById("num2").value) || 0;
    var resultado = num1 * num2;
    document.getElementById("resultado").value = resultado;
}

function dividir() {
    var num1 = parseFloat(document.getElementById("num1").value) || 0;
    var num2 = parseFloat(document.getElementById("num2").value) || 0;
    if (num2 === 0) {
        document.getElementById("resultado").value = "Error: División por cero";
    } else {
        var resultado = num1 / num2;
        document.getElementById("resultado").value = resultado;
    }
}