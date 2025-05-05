function Conta(ag, conta, saldo) {
  this.ag = ag;
  this.conta = conta;
  this.saldo = saldo;
}

Conta.prototype.sacar = function (valor) {
  if (valor > this.saldo) {
    console.log(`Saldo insuficiente: ${this.saldo.toFixed(2)}`);
    return;
  }
  this.saldo -= valor;
  this.verSaldo();
};

Conta.prototype.depositar = function (value) {
  this.saldo += value;
  return this.verSaldo();
};

Conta.prototype.verSaldo = function () {
  console.log(`AG/C: ${this.ag}/${this.conta} R$${this.saldo.toFixed(2)}`);
};

const ct1 = new Conta(23, 108853, 100);

function CC(agencia, conta, saldo, limite) {
  Conta.call(this, agencia, conta, saldo);
  this.limite = limite;
}


CC.prototype = Object.create(Conta.prototype);
CC.prototype.constructor = CC;

CC.prototype.sacar = function (valor) {
  if (valor > (this.saldo + this.limite)) {
    console.log(`Saldo insuficiente: ${this.saldo}`);
    return;
  }

  this.saldo -= valor;
  this.verSaldo();
};

function CP(agencia, conta, saldo){
  Conta.call(this, agencia, conta, saldo)
}

CP.prototype = Object.create(Conta.prototype);
CP.prototype.constructor = CP;



const cc1 = new CC(11, 22, 0, 100);
console.log(cc1);
cc1.sacar(100);
cc1.sacar(1);

const cp1 = new CP(11, 22, 100);
cp1.sacar(100);
cp1.sacar(1);


