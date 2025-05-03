const produto = { nome: "Caneca", preco: 1.5 };

const outraCopia1 = { ...produto }; // Copia Spreed
const outraCopia2 = Object.assign({}, produto); // Copia Assign

console.log(1, "Bloco");

console.log(produto);
console.log(outraCopia1);

outraCopia1.nome = "Carambolas";
console.log(outraCopia1);

console.log(" "); // espaço console
console.log(2, "Bloco");

// -- Adicionando valores no objeto --

const AddValue = { ...produto, modelo: "Porcelana Azul" }; // Spreed Op
console.log(AddValue);

const AddValueAssing = Object.assign({}, produto, { modelo: "Porcelana Azul" }); // Assign Obj
console.log(AddValueAssing);

//

console.log(" "); // espaço console
console.log(3, "Bloco");

// -- Usando Object.keys --

console.log(Object.keys(produto));

const objKeys = Object.values(produto);
objKeys.forEach((item) => item === "Nome" && console.log("Eu sou Nome"));

//

console.log(" "); // espaço console
console.log(4, "Bloco");

// -- Usando Object.freeze() --

const produto2 = { nome: "Camisa", preco: 15.5 };
Object.freeze(produto2);

produto2.nome = "Calça";
produto2.marca = "JKR";
delete produto2.preco;

console.log(produto2);

//

console.log(" "); // espaço console
console.log(5, "Bloco");

// -- Usando Obejct.Value --

console.log(Object.values(produto));

const objValues = Object.values(produto);
objValues.forEach((item) => item === "Caneca" && console.log("Eu sou Caneca"));

//

console.log(" "); // espaço console
console.log(6, "Bloco");

// -- Usando Object.Entries --

console.log(Object.entries(produto));

for (let [el, it] of Object.entries(produto)) {
  console.log(el, it);
}

//

console.log(" "); // espaço console
console.log(7, "Bloco");

// -- Object.getOwnPropertyDescriptor --
const produto3 = { nome: "Caneca", preco: 1.5 };
console.log(Object.getOwnPropertyDescriptor(produto3, "nome"));
console.log(Object.getOwnPropertyDescriptor(produto3, "preco"));

Object.defineProperties(produto3, {
  nome: {
    writable: false,
    value: nome,
    enumerable: true,
    configurable: true,
  },
  preco: {
    writable: true,
    value: nome,
    enumerable: true,
    configurable: true,
  },
});

produto3.nome = "Sera que roda";
console.log(produto3);

Object.defineProperties(produto3, {
  nome: {
    writable: true,
    value: nome,
    enumerable: true,
    configurable: false,
  },
});

produto3.nome = "Agora roda";

console.log(produto3);
console.log(Object.getOwnPropertyDescriptor(produto3, "nome"));

// ou

Object.defineProperty(produto3, "nome", {
  writable: false,
  configurable: true,
});

produto3.nome = "Sera que roda";
console.log(produto3);

Object.defineProperty(produto3, "nome", {
  writable: true,
  configurable: true,
});

produto3.nome = "Agora roda 2";

console.log(produto3);
console.log(Object.getOwnPropertyDescriptor(produto3, "nome"));

//
