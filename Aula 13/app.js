// const conta = {
//     numeroConta,
//     tipoConta,
//     saldo,
//     titular
// }

//funcao construtora conta
function Conta(numeroConta, tipoConta, saldo, titular){
    this.numeroConta = numeroConta;
    this.tipoConta = tipoConta;
    this.saldo = saldo;
    this.titular = titular;    
}

//instancia de clientes
let abigaelNatte = new Conta(
    5486273622,
    'ContaCorrente',
    27771,
    'AbigaelNatte'
);

let ramonConnel = new Conta(
    1183971869,
    'ContaPoupanca',
    8675,
    'RamonConnell'
);

let jarretLafuente = new Conta(
    9582019689,
    'ContaPoupanca',
    27363,
    'JarretLafuente'
);

let anselArdley = new Conta(
    1761924656,
    'ContaPoupanca',
    32415,
    'AnselArdley'
);

let jackiShurmer = new Conta(
    7401971607,
    'ContaPoupanca',
    18789,
    'JackiShurmer'
);

let jobiMawtus = new Conta(
    630841470,
    'ContaCorrente',
    28776,
    'JobiMawtus'
);

let thomasinLatour = new Conta(
    4223508636,
    'ContaCorrente',
    2177,
    'ThomasinLatour'
);

let lonnieVerheijden = new Conta(
    185979521,
    'ContaPoupanca',
    25994,
    'LonnieVerheijden'
);

let alonsoWannan = new Conta(
    3151956165,
    'ContaCorrente',
    7601,
    'AlonsoWannan'
);

let benditeHuggett = new Conta(
    2138105881,
    'ContaPoupanca',
    33196,
    'BenditeHuggett'
);

//console.log(thomasinLatour)

//lista de clientes
let listaContas = [abigaelNatte, ramonConnel, jackiShurmer, anselArdley, jackiShurmer, jobiMawtus, thomasinLatour, lonnieVerheijden, alonsoWannan, benditeHuggett];
//console.log(listaContas);

//obj banco recebe a lista de clientes
const banco = {
    clientes: listaContas,
    consultarClientes(nome){
        this.nome = listaContas[i];
        return nome;
    },
    deposito(valor){
        Conta.saldo += valor;
        console.log(`Depósito realizado, seu novo saldo é: "R$"${valor}`)
    },
    //saca se valor atual na conta for maior ou igual ao valor do solicitado
    saque(valor){
        if(Conta.saldo >= valor){
            Conta.saldo -= valor;
            console.log(`Saque feito com sucesso! Valor atual na conta é de: "R$"${valor}`);
            return true;
            
        } else {
            console.log("Saldo na conta insuficientes.")
            return false;
        }
    }
}

//console.log(banco);

