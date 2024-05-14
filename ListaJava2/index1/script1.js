let x= 20;
let y= 12;
let resultado;//seria o "resultado = 0;"

function diferencaNumeros()  {
    
    resultado = x - y;
    console.log("A diferença entre as variáveis é: " + resultado + "."); //"+" é como se fosse a vírgula no visualg.//Concatenar!//
}


function dobroTriploNumeros() {

    resultado = (x * 2) + (y * 3);
    console.log("O resultado final é: " + resultado + ".");
}

function multiplicacaoNumeros() {

    resultado = x * y;
    console.log("A multiplicação das variáveis é de: " + resultado + ".");
}

function maiorMenorNumeros() {

    x = parseInt(document.getElementById('um').value);
    y = parseInt(document.getElementById('dois').value);

    if (x > y) {
        console.log("Em ordem decrescente as variáveis ficam: " + x + ", " + y);
    } else {
        console.log("Em ordem decrescente as variáveis ficam: " + y + ", " + x);

    }
}

diferencaNumeros()
dobroTriploNumeros()
multiplicacaoNumeros()