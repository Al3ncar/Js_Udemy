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

