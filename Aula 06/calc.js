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

console.log(adicionar(10,10));
console.log(subtrair(10,10));
console.log(multiplicar(10,10));
console.log(dividir(0,10));

//Nível 3

function quadradoDoNumero(numA) {
    return multiplicar(numA, numA);
}

console.log(quadradoDoNumero(5));

function mediaDeTres(numA, numB, numC){
    let soma = numA + numB + numC;
    let total = soma / 3;
    return total;
}

console.log(mediaDeTres(2,2,2));


function calcularPorcentagem(num, valorDaPorcentagem){
    let totalPorcentagem = (valorDaPorcentagem * num) / 100;
    return totalPorcentagem;
}   

console.log(calcularPorcentagem(50, 200));




