/* let numbers = [22, 33, 54, 66, 72]
    console.log(numbers.length) */

//erro de sintaxe

/* let grupoDeAmigos = [ 
    ["Harry", "Ron", "Hermione"], 
    ["Spiderman", "Hulk", "Ironman"], 
    ["Penélope Glamour", "Pierre Nodoyuna","Patán"] 
] */
//console.log(grupoDeAmigos[1][0])

//como é uma matriz, retorna a posicao 0 do elemento 1

/* let str = 'una string qualquer'
let grupoDeAmigos = [ 
    [45, 89, 0], 
    ["Digital", "House", true], 
    ["string", "123","false", 54, true, str] 
]

console.log(grupoDeAmigos[2][grupoDeAmigos[2].length - 1]) */

//nao fazemos idea pq retornou a variavel str


//inverter array
let array = [0, 1, 2, 3];

function impimirInverso(novoArray){
    
    novoArray = array.reverse();
    return novoArray;    
    
} 

console.log(impimirInverso(array));


//somar array
let numeros = [5,10,20,9, 100];

  let soma = numeros.reduce((total, ultimoElemento) => total + ultimoElemento);

console.log(soma);


//concatenar string dentro de um array
let str = ['t', 'e', 's', 't', 'e'];

  let concat = str.reduce((total, ultimoElemento) => total + ultimoElemento);

console.log(concat);


function join(array) {
    let concat = array.reduce((total, ultimoElemento) => total + ultimoElemento);
    console.log(concat);
}

join(str);


//colecoes de filmes
const filmes = [
    'Star Wars',
    'Matrix',
    'Mr. Robot',
    'O Preco do Amanha',
    'A Vida e Bela',
]

console.log(filmes[2]);


