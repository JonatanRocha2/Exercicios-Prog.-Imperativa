/**
 * 
 * Alunos:
 *  
 * Jonatan Rocha
 * Camila Monaco
 * Vinicius Taurisano
 * Joao Matheus
 * Antonio Mesquita 
 * 
 */


/* Calculadora em Javascript */


//Nível 1

function adicionar(numA, numB) {
    return numA + numB;
}

function subtrair(numA, numB) {
    return numA - numB;
}

function multiplicar(numA, numB) {
    return numA * numB;
}

function dividir(numA, numB) {
    return numA / numB;
}

// Nível 2

console.log("================== Teste de Operações/Calculadora ==================")

/* console.log(adicionar(10,10));
console.log(subtrair(10,10));
console.log(multiplicar(10,10));
console.log(dividir(0,10));
 */


//Nível 3

function quadradoDoNumero(numA) {
    return multiplicar(numA, numA);
}

//console.log(quadradoDoNumero(5));

function mediaDeTres(numA, numB, numC){
    let primeiraSoma = adicionar(numA, numB);
    let segundaSoma = adicionar(primeiraSoma, numC);
    return dividir(segundaSoma, numC);
}

//console.log(`${mediaDeTres(20, 50, 100)}`);


function calcularPorcentagem(num, percentual){
    return dividir(multiplicar(num, percentual), 100);
}   

//console.log(`${calcularPorcentagem(50, 200)}`);


function geradorPorcentagem(percentual, num) {
    return multiplicar(dividir(percentual, num), 100);
}

//console.log(`${geradorPorcentagem(50, 200)}`);