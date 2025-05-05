const configPrototype = (child, parent) => {
  child.prototype = Object.create(parent.prototype);
  child.prototype.constructor = child;
};

function Produto(nome, valor) {
  this.nome = nome;
  this.valor = valor;
}

Produto.prototype.aumento = function (quantia) {
  this.valor += quantia;
};

function Camiseta(nome, valor, cor) {
  Produto.call(this, nome, valor);
  this.cor = cor;
}

Camiseta.prototype.des = "heehehhheeh";
Camiseta.prototype.aumentar = function (perc) {
  this.valor = this.valor + this.valor * (perc / 100);
};
const cam = new Camiseta("Regata", 100, "branca");
console.log(cam);

function Caneca(nome, valor, material, cor, modelo) {
  Camiseta.call(this, nome, valor, material, cor);
  this.modelo = modelo;
}

configPrototype(Camiseta, Produto);
configPrototype(Caneca, Camiseta);

const prod = new Produto("Gen", 100);
const copo = new Caneca("Caneca", 100, "Porcelana", "branca", "MKD");

// cam.aumento(100);
copo.aumento(100);

console.log(prod);
console.log(copo);
