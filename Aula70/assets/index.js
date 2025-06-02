class Pessoa {
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }

  falar() {
    console.log(`${this.nome} está falaando`);
  }

  bebendo() {
    console.log(`${this.falar()} está bebendo agora`);
  }
}

const p1 = new Pessoa("Fernanda", "Castro");
const p2 = new Pessoa("Julia", "Castro");

// p1.falar();
p1.bebendo();

console.log(" ");

// p2.falar();
p2.bebendo();
