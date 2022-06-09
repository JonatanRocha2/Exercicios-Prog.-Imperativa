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
let conta1 = new Conta(
    5486273622,
    'ContaCorrente',
    27771,
    'AbigaelNatte'
);

let conta2 = new Conta(
    1183971869,
    'ContaPoupanca',
    8675,
    'RamonConnell'
);

let conta3 = new Conta(
    9582019689,
    'ContaPoupanca',
    27363,
    'JarretLafuente'
);

let conta4 = new Conta(
    1761924656,
    'ContaPoupanca',
    32415,
    'AnselArdley'
);

let conta5 = new Conta(
    7401971607,
    'ContaPoupanca',
    18789,
    'JackiShurmer'
);

let conta6 = new Conta(
    630841470,
    'ContaCorrente',
    28776,
    'JobiMawtus'
);

let conta7 = new Conta(
    4223508636,
    'ContaCorrente',
    2177,
    'ThomasinLatour'
);

let conta8 = new Conta(
    185979521,
    'ContaPoupanca',
    25994,
    'LonnieVerheijden'
);

let conta9 = new Conta(
    3151956165,
    'ContaCorrente',
    7601,
    'AlonsoWannan'
);

let conta10 = new Conta(
    2138105881,
    'ContaPoupanca',
    33196,
    'BenditeHuggett'
);

//lista de clientes
let listaContas = {
    1: {conta1},
    2: {conta2},
    3: {conta3},
    4: {conta4},
    5: {conta5},
    6: {conta6},
    7: {conta7},
    8: {conta8},
    9: {conta9},
    10: {conta10}
}


//obj banco recebe a lista de clientes
const banco = {
    clientes: listaContas,
    consultarClientes(nome){
        this.nome = listaContas;
        return nome;
    },
    deposito(titular, valor){
        
              


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






