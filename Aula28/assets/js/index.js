//Mais diferenças entre Let e Const:

//Uma Let não pode ser redeclarada, exemplo:
let nome = 'Ighor';
var nome2 = 'Ighor';

// let nome = ' Alencar'; // Caso esse codigo retorne ele ira



// -----   ----- //



const verdadeiro = true;

let nome2 = 'Igor';
var nome3 = 'Alencar';

if(verdadeiro){
  console.log(nome2, nome3 )
}
//Deste modo será retornado Igor Alencar;

//Agora irei fazer o mesmo codigo com uma alteração diferente

const verdadeiro2 = true;

let nome3 = 'Igor';
var nome4 = 'Alencar';

if(verdadeiro){
  let nome3 = 'IGOOOROOOOOO'
  console.log(nome3, nome4)
}

// Agora será retornado no console:
//  IGOOOR Alencar
 


// -----   ----- //



//Let tem escopo de BLOCO { ... BLOCO }
//Tudo que tiver dentro de chaves é um bloco

{
  let nome3 = 'IGOOOROOOOOO'
  console.log(nome3, nome4)
}

//Quando VAR só tem escopo de função.

// BLOCO ESCOPO
  let nome4 = 'Coisa'; // CRIANDO VARIAVEL
  const verdadeiro3 = true;


  if(verdadeiro3){ 
    // BLOCO ESCOPO
      let nome = 'coisadoidamesmo'; // CRIANDO VARIAVEL
      console.log(nome)

      //Podemos criar blocos aninhados, desta maneira

      if(verdadeiro3){ 
        // BLOCO ESCOPO
          console.log('OK')
      }

  }