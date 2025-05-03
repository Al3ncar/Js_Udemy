// function Pessoas(nome, valor, estoque) {
//   this.nome = nome;
//   this.valor = valor;

//   Object.defineProperty(this, "estoque", {
//     enumerable: true,
//     valor: estoque,
//     writable: true,
//     configurable: true,
//   });

//   Object.defineProperty(this, "estoque", {
//     enumerable: false,
//     configurable: false,
//   });
// }

// const p1 = new Pessoas("Camisas", 20, 3);
// p1.estoque = 5000;

// console.log(p1);

function Venda(nome, preco, estoque) {
  this.nome = nome;
  this.preco = preco;

  Object.defineProperty(this, "estoque", {
    enumerable: true,
    value: estoque,
    writable: true,
    configurable: true,
  });

  // Object.defineProperty(this, "estoque", {
  //   enumerable: true,
  //   configurable: false,
  // });
}

const p1 = new Venda("Camisa", 20, 6);
console.log(p1);

p1.estoque = 25;
console.log(p1.estoque);

//
console.log(" "); // espaço no console
//

function Venda2(nome, preco, estoque) {
  this.nome = nome;
  this.preco = preco;

  Object.defineProperties(this, {
    nome: {
      enumerable: true,
      value: nome,
      writable: true,
      configurable: true,
    },
    preco: {
      enumerable: true,
      value: preco,
      writable: true,
      configurable: true,
    },
    estoque: {
      enumerable: true,
      value: estoque,
      writable: true,
      configurable: true,
    },
    estoque: {
      enumerable: true,
      value: estoque,
      configurable: false,
    },
  });
}

const p2 = new Venda2("Calça", 60, 9);

console.log(p2);
p2.estoque = 33;
console.log(Object.keys(p2));
