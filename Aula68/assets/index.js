const fala = {
  falar() {
    console.log(`${this.nome}, esta falando `);
  },
};

const bebendo = {
  bebendo() {
    console.log(`${this.nome}, esta bebendo `);
  },
};

const comendo = {
  comendo() {
    console.log(`${this.nome}, esta comendo `);
  },
};

const pessoaPrototype = Object.assign({}, fala, bebendo, comendo);
const pessoaPrototype2 = { ...fala, ...bebendo, ...comendo };

function criaPessoa(nome, sobrenome) {
  return Object.create(pessoaPrototype, {
    nome: { value: nome },
    sobrenome: { value: sobrenome },
  });
}

const p1 = criaPessoa("Rogerio", "Gonndingo");
const p2 = criaPessoa("Amelha", "Figueiredo");

console.log(p1);
console.log(p2);
console.log("");

p1.falar();
p1.bebendo();
p1.comendo();

console.log("");

p2.falar();
p2.bebendo();
p2.comendo();

console.log("");
