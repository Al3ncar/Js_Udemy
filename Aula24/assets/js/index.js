// Operadores ternario

// O operador ternario é um meio de reduzir o if/else, tendo a mesma lógica com uma estrutura diferente.

    const pontuacao = 1000;

    if(pontuacao >= 1000){
        console.log(`Usuario Vip, seus pontos são ${pontuacao}`)
    }else{
        console.log(`Usuario Normal, seus pontos são ${pontuacao} `)
    }


// ---- ---- //



// Usando o ternario:

//Inicialmente devemos colocar o verificador, depois será a resposta verdadeira, depois a resposta falsa.
// Sintaxe: 
    const resultPont = ( pontuacao >= 1000 )
        ? console.log(`Usuario Vip, seus pontos são ${pontuacao}`) 
        : console.log(`Usuario Normal, seus pontos são ${pontuacao} `);

// Sintaxe lógica:
//  (VERIFICADOR)  ?     TRUE     :    FALSE  

// VERIFICADOR ==> aqui íra ficar o que vai ser verificado / as prioridades da condição 
//     TRUE    ==> aqui será VERDADEIRO se a condição for TRUE
//    FALSE    ==> aqui será FALSO se a condição for FALSE


//Outra maneira de usar uma condição:

    const corUsario = 'Red';
    const colorWeb = corUsario || 'Black';

    console.log(colorWeb)