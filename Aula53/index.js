// Factory function 
// Construction Function 

const obj = (nome, sobrenome, altura, peso) => {
  return {
    nome,
    sobrenome,
    altura,
    peso,

    get fala() {
      return `Meu nome é ${this.nome} ${this.sobrenome}`;
    },

    //SETTER
    set fala(value) {
      value = value.split(" ");
      this.nome = value.shift();
      this.sobrenome = value.join(' ')
      console.log(value);
    },

    // GETTER
    assunto() {
      return `${this.fala} tenho ${altura} e ${peso}`;
    },
  };
};

const p1 = obj("Igor", "Bastos", 1.85, 100);
console.log(p1.fala);
console.log(p1.assunto());

// Mascarando a função para uma variavel
p1.fala = "Angela Ferreira Perreira";
console.log(p1.fala);


