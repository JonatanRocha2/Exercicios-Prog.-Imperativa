
function menuMicroondas(opcao, tempo) {

    if(opcao == 1 && tempo == 10) {
        console.log('Pronto! Bom apetite');
    } else if(opcao == 1 && tempo == 2*10) {
        console.log('Sua comida queimou!');
    } else if(tempo < 10) {
        console.log('Tempo insuficiente!');
    } else if(opcao == 1 && tempo == 3*10) {
        console.log('KABUUM');
    }
}


menuMicroondas(1, 1);