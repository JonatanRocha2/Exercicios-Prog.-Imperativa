/* Crie uma função construtora que tenha como atributos: nome (string), quantidade de faltas (number) e notas (array de números).  */

function Aluno(nome, qtdFaltas, notas){
    this.nome = nome;
    this.qtdFaltas = qtdFaltas;
    this.notas = notas;

    this.calcularMedia = function(){
        let soma = 0;
        let media = 0;

        for(let i = 0; i <this.notas.length; i ++){
            soma += this.notas[i];
        }
        media = soma/notas.length;
        console.log(`Media das notas do aluno ${this.nome} é de: ${media}`)
        return media;
    };

    this.faltas = function(){
        this.qtdFaltas++;
        console.log(`${this.nome} está com ${this.qtdFaltas} faltas.`)
    }
}

/* Na função construtora crie o método calcularMedia que retorna a média de suas notas. Também terá um método chamado faltas, que simplesmente aumenta o número de faltas em 1. Crie alguns alunos para testar a sua função construtora.  */



const aluno1 = new Aluno('Luffy', 4, [4, 2, 3, 3]);
const aluno2 = new Aluno('Zoro', 2, [2, 9, 7, 5]);
const aluno3 = new Aluno('Sanji', 1, [10, 9, 7, 8]);
const aluno4 = new Aluno('Ussop', 4, [1, 6, 3, 4]);

aluno1.calcularMedia();
aluno2.calcularMedia();
aluno3.calcularMedia();
aluno4.calcularMedia();

aluno1.faltas();
aluno2.faltas();
aluno3.faltas();
aluno4.faltas();


/* Crie o objeto literal curso que tem como atributos: nome do curso (string), nota de aprovação (number), faltas máximas (number) e uma lista de estudantes (um array composto pelos alunos criados no passo 2). */

const alunos = [aluno1, aluno2, aluno3, aluno4];

const curso = {
    nomeCurso: '',
    notaAprovacao: 7,
    faltasMaximas: 5,
    listaEstudantes: alunos,
    /* Crie o método que permite adicionar alunos à lista do curso, ou seja, quando chamamos nosso método em nosso objeto curso, deverá adicionar um aluno a mais na propriedade lista de estudantes do objeto curso. */
    addAluno(nome, qtdFaltas, notas){
        let aluno = new Aluno(nome, qtdFaltas, notas);
        this.listaEstudantes.push(aluno);
    },
    /* Crie um método para o objeto curso que receba um aluno (como parâmetro) e retorne true se ele aprovou no curso ou false em caso de reprovação. Para ser aprovado, o aluno tem que ter uma média igual ou acima da nota de aprovação  e ter menos faltas que faltas máximas. Se tiver a mesma quantidade, tem que estar 10% acima da nota de aprovação. */
    aprovadoOuReprovado(aluno){
        let media = aluno.calcularMedia();
        let resultado;

        if (aluno.qtdFaltas < this.limiteFaltas && media >= this.notaAprovacao) {
            resultado = console.log(aluno.nome + " aprovado");
        }else if(aluno.qtdFaltas == this.limiteFaltas && media >= (this.notaAprovacao * 1.1)){
            resultado = console.log(aluno.nome + " aprovado");
        }else {
            resultado = console.log(aluno.nome + " reprovado");
        }
        return resultado;
    },
    /* Crie um método para o objeto curso que percorra a lista de estudantes e retorne um array de booleanos com os resultados se os alunos aprovaram ou não. */
    listaResultados(){
        let resultadoFinal = [];
        for(let i = 0; i < this.listaEstudantes.length; i++){
            resultadoFinal.push(this.aprovadoOuReprovado(this.listaEstudantes[i]))
        }
        return resultadoFinal;
    }
}

//curso.addAluno('Nami', 4, [10, 9, 10, 9]);

//console.log(curso.aprovadoOuReprovado(aluno2));

//console.log(curso.listaResultados());






