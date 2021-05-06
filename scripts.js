function sumar(){
    var x = parseInt(document.getElementById('num1').value);
    var y = parseInt(document.getElementById('num2').value);
    document.getElementById('resultado').innerHTML = x + y;
}

function restar(){
    var x = parseInt(document.getElementById('num1').value);
    var y = parseInt(document.getElementById('num2').value);
    document.getElementById('resultado').innerHTML = x - y;
}

function multiplicar(){
    var x = parseInt(document.getElementById('num1').value);
    var y = parseInt(document.getElementById('num2').value);
    document.getElementById('resultado').innerHTML = x * y;
}

function dividir(){
    var x = parseInt(document.getElementById('num1').value);
    var y = parseInt(document.getElementById('num2').value);
    document.getElementById('resultado').innerHTML = x / y;
}

function reset(){
    document.getElementById('reset').reset;
}
