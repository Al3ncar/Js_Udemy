class Pessoas {
  constructor(name, fullName) {
    this.name = name;
    this.fullName = fullName;

    console.log(this.constructor.falar());
    console.log(Pessoas.falar());
  }

  static falar() {
    return "estou em ação";
  }
}

const p1 = new Pessoas("Amanda", "jovield");

Pessoas.falar(p1.name, p1.fullName);

class Trible {
  static trible(n) {return (n | 1) * 3;}
}

class Acont extends Trible {
  static trible(n) {return super.trible(n) ** 2;}
}

console.log(Trible.trible());
console.log(Trible.trible(6));
console.log(Acont.trible(6));