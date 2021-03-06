//funcao construtora conta

function Conta(numeroConta, tipoConta, saldo, titular) {
  this.numeroConta = numeroConta;
  this.tipoConta = tipoConta;
  this.saldo = saldo;
  this.titular = titular;
}

//instancia de clientes

let abigaelNatte = new Conta(5486273622, "ContaCorrente", 27771, "AbigaelNatte");

let ramonConnel = new Conta(1183971869, "ContaPoupanca", 8675, "RamonConnell");

let jarretLafuente = new Conta(9582019689, "ContaPoupanca", 27363, "JarretLafuente");

let anselArdley = new Conta(1761924656, "ContaPoupanca", 32415, "AnselArdley");

let jackiShurmer = new Conta(7401971607, "ContaPoupanca", 18789, "JackiShurmer");

let jobiMawtus = new Conta(630841470, "ContaCorrente", 28776, "JobiMawtus");

let thomasinLatour = new Conta(4223508636, "ContaCorrente", 2177, "ThomasinLatour");

let lonnieVerheijden = new Conta(185979521, "ContaPoupanca", 25994, "LonnieVerheijden");

let alonsoWannan = new Conta(3151956165, "ContaCorrente", 7601, "AlonsoWannan");

let benditeHuggett = new Conta(2138105881, "ContaPoupanca", 33196, "BenditeHuggett");

//lista de clientes
let listaContas = [abigaelNatte, ramonConnel, jarretLafuente, anselArdley, jackiShurmer, jobiMawtus, thomasinLatour, lonnieVerheijden, alonsoWannan, benditeHuggett];

//obj banco recebe a lista de clientes

let banco = {
    clientes: listaContas,

    //cadastrar cliente
    cadastrarCliente(numeroConta, tipoConta, saldo, titular){
      let cliente = new Conta(numeroConta, tipoConta, saldo, titular);
      this.clientes.push(cliente);
    },
    
    //consultar cliente
    consultarCliente(titular) {
      for (let i = 0; i < this.clientes.length; i++) {
        let titularBuscado = this.clientes[i].titular;
        if (titularBuscado === titular) {
          return this.clientes[i];
        }
      }
    },

    //realizar deposito
    depositar(titular, valor){
        let clienteBuscado = this.consultarCliente(titular);
        clienteBuscado.saldo += valor;
        console.log("Deposito realizado! Seu novo saldo ?? de: " + clienteBuscado.saldo);
    },

    //realizar saque
    sacar(titular, valor){
        let clienteBuscado = this.consultarCliente(titular);
        if(clienteBuscado && (clienteBuscado.saldo - valor) >= 0){
          clienteBuscado.saldo -= valor;
          console.log("Saque realizado! Seu novo saldo ?? de: " + clienteBuscado.saldo);
        } else {
          console.log("Saque n??o realizado.");
        }
        
    }
};




/* 

banco.depositar('BenditeHuggett', 5000);
banco.consultarCliente('BenditeHuggett'); 
banco.sacar('BenditeHuggett', 1000); 

*/