//funcao construtora conta

function Conta(numeroConta, tipoConta, saldo, titular){
    this.numeroConta = numeroConta;
    this.tipoConta = tipoConta;
    this.saldo = saldo;
    this.titular = titular;    
}

//instancia de clientes

let abigaelNatte = new Conta(5486273622, 'ContaCorrente', 27771, 'AbigaelNatte');

let ramonConnel = new Conta(1183971869, 'ContaPoupanca', 8675, 'RamonConnell');

let jarretLafuente = new Conta(9582019689, 'ContaPoupanca', 27363, 'JarretLafuente');

let anselArdley = new Conta(1761924656, 'ContaPoupanca', 32415, 'AnselArdley');

let jackiShurmer = new Conta(7401971607, 'ContaPoupanca', 18789, 'JackiShurmer');

let jobiMawtus = new Conta(630841470, 'ContaCorrente', 28776, 'JobiMawtus');

let thomasinLatour = new Conta(4223508636, 'ContaCorrente', 2177, 'ThomasinLatour');

let lonnieVerheijden = new Conta(185979521, 'ContaPoupanca', 25994, 'LonnieVerheijden');

let alonsoWannan = new Conta(3151956165, 'ContaCorrente', 7601, 'AlonsoWannan');

let benditeHuggett = new Conta(2138105881, 'ContaPoupanca', 33196, 'BenditeHuggett');

//lista de clientes
let listaContas = {
     1: {cliente: abigaelNatte}, 
     2: {cliente: ramonConnel}, 
     3: {cliente: jarretLafuente}, 
     4: {cliente: anselArdley}, 
     5: {cliente: jackiShurmer}, 
     6: {cliente: jobiMawtus}, 
     7: {cliente: thomasinLatour}, 
     8: {cliente: lonnieVerheijden}, 
     9: {cliente: alonsoWannan}, 
     10: { cliente: benditeHuggett}
};

// let infoCliente = listaContas.find(item => item.id == 2);
// console.log(infoCliente.cliente.titular)


//obj banco recebe a lista de clientes

const banco = {
    clientes: listaContas,
    consultarClientes(nome){
        let infoCliente = listaContas[nome];
        return infoCliente;
    },

    deposito(nome, valor){
        
        console.log(`Depósito realizado, seu novo saldo é: `)
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


console.log(banco.consultarClientes(10))