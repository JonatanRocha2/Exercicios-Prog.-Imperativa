/*

Olá, você foi contratado para executar este projeto. É importante que você analise, entenda o pedido do cliente e desenvolva conforme solicitado. 

Veja abaixo os requisitos do projeto:

- Precisamos desenvolver um menu para um microondas super veloz, onde teremos 5 opções de comida com seus respectivos tempos pré-definidos. 

      1 - Pipoca – 10 segundos (padrão);
      2 - Macarrão – 8 segundos (padrão);
      3 - Carne – 15 segundos (padrão);
      4 - Feijão – 12 segundos (padrão);
      5 - Brigadeiro – 8 segundos (padrão); 

- O usuário poderá alterar o tempo padrão, aumentando ou diminuindo de acordo com sua vontade. Se o tempo informado for maior que 2x o necessário, exibir mensagem que a comida queimou.
- Se o tempo for menor que o padrão, exibir a mensagem: "tempo insuficiente"; 
- Opções não listadas no menu, devem exibir uma mensagem de erro: "Prato inexistente";
- Se o tempo for 3x maior que o necessário para o prato, o microondas deve exibir a mensagem: “kabumm”;
- No final de cada tarefa, o microondas deverá exibir a mensagem: "Prato pronto, bom apetite!!!".

*/


const opcoes = {
    //propriedade:valor
    1 : {nomeDoPrato: 'pipoca', padrao: 10},
    2 : {nomeDoPrato: 'macarrao', padrao: 8},
    3 : {nomeDoPrato: 'carne', padrao: 15},
    4 : {nomeDoPrato: 'feijao', padrao: 12},
    5 : {nomeDoPrato: 'brigadeiro', padrao: 8}
}

function menuMicroondas(codigo, tempo) {
    
    //variavel opcao recebe o id do objeto opcoes que sao passados como um array de IDs
    const opcao = opcoes[codigo];   

    //se a opcao inserida for inexistente
    if(!opcao){
        return console.log(`Opcao inexistente`);
    }

    //variavel tempoOpcao recebe a variavel opcao que acessa o tempo padrao do objeto
    const tempoOpcao = opcao.padrao;

    //verificacoes
    //se tempo for menor que tempoPadrao
    if(tempo < tempoOpcao){
        console.log(`Tempo insuficiente`);
    //se tempo inserido for menor que o dobro do tempo padrao e menor que o triplo do tempo padrao
    } else if(tempo >= tempoOpcao*2 && tempo <= tempoOpcao*3){
        console.log(`Comida queimou`);
    //se tempo inserido for maior que o triplo do tempo padrao
    } else if(tempo >= tempoOpcao*3){
        console.log(`KABUUM!`);
    //se todas as verificacoes forem falsas
    } else{
        console.log(`Pronto, pronto. Bom apetite!`);
    }

}

//chamada da funcao
menuMicroondas(6, 20);



