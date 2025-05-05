function Pessoa(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.nomeCompleto = () => `ORIGINAL: ${this.nome} ${this.sobrenome}`;
}

const p1 = new Pessoa("Geogina", "Vieira");
const p2 = new Pessoa("Magnum", "Cabral");
const date = new Date();

Pessoa.prototype.risos = "Heheheheheheheh";
Pessoa.prototype.nomeCompleto = function () {
  // Será Executado quando o metodo não existir na Função construtora
  // caso exista na função esse metodo será substituido pelo mesmo
  return `COPIA: ${this.nome} ${this.sobrenome}`; 
};

console.dir(p1);
console.dir(date);

