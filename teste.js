const menu = {
    1:{NomeDoPrato:'Pipoca', tempoPadrao:10},
    2:{NomeDoPrato:'Macarrão', tempoPadrao:8},
    3:{NomeDoPrato:'Carne', tempoPadrao:15},
    4:{NomeDoPrato:'Feijão', tempoPadrao:12},
    5:{NomeDoPrato:'Brigadeiro', tempoPadrao:8},
}

function microondas(codigo, tempo) { 

    const opcao = menu[codigo];

    const tempoOpcao = opcao.tempoPadrao;

    if(!opcao){
        return console.log(`Opcao inexistente`);
    }

    if(tempo < tempoOpcao){
        console.log(`Tempo insuficiente`);
    } else if(tempo >= tempoOpcao*2 && tempo <= tempoOpcao*3){
        console.log(`Comida queimou`);
    } else if(tempo >= tempoOpcao*3){
        console.log(`KABUUM!`);
    } else{
        console.log(`Pronto, pronto. Bom apetite!`);
    }


}

microondas(8, 20);

