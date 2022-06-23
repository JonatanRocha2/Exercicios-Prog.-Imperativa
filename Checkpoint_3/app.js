/* Crie uma função construtora que tenha como atributos: nome (string), quantidade de faltas (number) e notas (array de números).  */

function Aluno(nome, qtdFaltas, notas){
    this.nome = nome;
    this.qtdFaltas = qtdFaltas;
    this.notas = notas;

    this.calcularMedia = function(nomeAluno){
        let soma = 0;
        let media = 0;
        let arrayNotas = [notas];

        for(let i = 0; i < arrayNotas; i++){
            if(nomeAluno === nome){
                
            }
        }
    }
}

/* Na função construtora crie o método calcularMedia que retorna a média de suas notas. Também terá um método chamado faltas, que simplesmente aumenta o número de faltas em 1. Crie alguns alunos para testar a sua função construtora.  */


const aluno1 = new Aluno('Luffy', 4, [4, 2, 3, 3]);
const aluno2 = new Aluno('Zoro', 2, [2, 9, 7, 5]);
const aluno3 = new Aluno('Sanji', 1, [10, 9, 7, 8]);
const aluno4 = new Aluno('Usop', 4, [1, 6, 3, 4]);

