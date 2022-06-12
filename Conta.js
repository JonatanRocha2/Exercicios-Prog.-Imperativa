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

    consultarCliente(titular) {
      let resultado = [];
      for (let i = 0; i < this.clientes.length; i++) {
        let titularBuscado = this.clientes[i].titular;
        if (titularBuscado === titular) {
          return this.clientes[i];
        }
      }
      return resultado;
    },

    depositar(titular, valor){
        titular = this.consultarCliente();

        for(let i = 0; i < this.clientes.length; i++){
            
            let saldoAtual = this.clientes[i].saldo;
            return saldoAtual += valor;              
        }         
    },

    //sacar(titular, valor){



    //}
};

console.log(banco.depositar('RamonConnel', 5000));