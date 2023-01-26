// Vamos usar o IF e o else, ambos são baseado em uma eztrutura de condição 


const hora = 10;

if(hora <= 12){
    console.log(` Bom dia`)
}

// sintaxe:

/* se */if(/* isso for verdadeiro */hora <= 11){
    /* acontece isso */ console.log(` Bom Dia!! `)
}/* se não for verdadeiro */ else{
    /* acontece isso */ console.log(` Boa Tarde!! `)
} 

//podemos construir diversas condiçoes juntas, deste modo:

const horas2 = 24

if(horas2 <= 6){
    console.log(` Bom Dia!! `)
//    Entre 0 até as 6 vai retornando Bom Dia;

}else if(horas2 <= 12){
    console.log(` Boa Tarde!!`)
//    Entre 7 até as 12 vai retornando Boa Tarde;

}else if(horas2 <= 18){
    console.log(` Boa Tardezinha!! `)
//    Entre 13 até as 18 vai retornando Boa Tardezinha;

}else if(horas2 <= 23){
    console.log(` Boa Noite!! `)
//    Entre 19 até as 23 vai retornando Boa Noite;

}else{
//    Caso o numero não tiver dentro do padrão esperado
    // maior que 23
    // menor que 0
//Irá retornar uma mensagem fala que sabe as horas
    console.log(`Não sei que horas são`)

}


