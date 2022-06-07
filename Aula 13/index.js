const participanteA = [5, 8, 4, 9, 5];
const participanteB = [8, 7, 8, 6, 8];
const participanteC = [7, 5, 10, 8, 3];


function pontuacaoMaior(participante){
    let maior = participante[0];

    for(let i = 1; i < participante.length; i++){
        let nota = participante[i];
        if(nota > maior){
            maior = nota;
        }   
    }
    return maior;
}

//console.log(pontuacaoMaior(participanteB));


function pontuacaoMedia(participante){
    let soma = 0;
    let media = 0;

    for(let i = 0; i < participante.length; i++){
        soma += participante[i];   
        media = soma / participante.length;
    }
    return media;
}

//console.log(pontuacaoMedia(participanteB));


function vencedorCompeticao(competidorA, competidorB, competidorC){


    if(pontuacaoMaior(competidorA) > pontuacaoMaior(competidorB) && pontuacaoMaior(competidorA) > pontuacaoMaior(competidorC)){
        console.log("Vencedor Participante A por maior pontuação");
        
    } else if(pontuacaoMaior(competidorB) > pontuacaoMaior(competidorA) && pontuacaoMaior(competidorB) > pontuacaoMaior(competidorC)){
        console.log("Vencedor Participante B por maior pontuação");
        
    } else if(pontuacaoMaior(competidorC) > pontuacaoMaior(competidorA) && pontuacaoMaior(competidorC) > pontuacaoMaior(competidorB)){
        console.log("Vencedor Participante C por maior pontuação");
        
    } 
    
    if(pontuacaoMedia(competidorA) > pontuacaoMedia(competidorB) && pontuacaoMedia(competidorA) > pontuacaoMedia(competidorC)){
        console.log("Vencedor Participante A por maior média");
        
    } else if(pontuacaoMedia(competidorB) > pontuacaoMedia(competidorA) && pontuacaoMedia(competidorB) > pontuacaoMedia(competidorC)){
        console.log("Vencedor Participante B por maior média");
        
    } else if(pontuacaoMedia(competidorC) > pontuacaoMedia(competidorA) && pontuacaoMedia(competidorC) > pontuacaoMedia(competidorB)){
        console.log("Vencedor Participante C por maior média");
        
    }
    
}

vencedorCompeticao(participanteA, participanteB, participanteC);