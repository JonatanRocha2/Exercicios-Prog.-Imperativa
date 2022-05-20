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
    1 : {nomeDoPrato: 'pipoca', padrao: 10},
    2 : {nomeDoPrato: 'macarrao', padrao: 8},
    3 : {nomeDoPrato: 'carne', padrao: 15},
    4 : {nomeDoPrato: 'feijao', padrao: 12},
    5 : {nomeDoPrato: 'brigadeiro', padrao: 8}
}

function menuMicroondas(codigo, tempo) {
    const opcao = opcoes[codigo];
    const tempoOpcao = opcao.padrao;

    if(!opcao){
        return console.log(`Opcao inexistente`);
    }

    if(tempo < tempoOpcao){
        console.log(`Tempo insuficiente`);
    } else if(tempo > tempoOpcao*2 && tempo <= tempoOpcao*3){
        console.log(`Comida queimou`);
    } else if(tempo > tempoOpcao*3){
        console.log(`KABUUM!`);
    } else{
        console.log(`Pronto, pronto. Bom apetite!`);
    }

    

}

menuMicroondas(3, 46);