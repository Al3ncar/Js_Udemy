class Animal {
  constructor(name, barulho) {
    this.name = name;
    this.barulho = barulho;
  }
}

const animal1 = new Animal("Cachorro", "Au Au");
const animal2 = new Animal("Gato", "Miau Miau");

console.log(animal1);
console.log(animal2);
console.log(" ");

class Cachorro extends Animal {
  constructor(name, som, raça) {
    super(name, som);
    this.raça = raça;
  }
}

const animal3 = new Cachorro("Cavalo", "iiirrrrir", "Belga");
const animal4 = new Cachorro("Galinha", "Pooopooo", "Angola");

console.log(animal3);
console.log(animal4);
