// Vamos usar o IF e o else, ambos são baseado em uma estrutura de condição 


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

// o ultimo else dessa função será retornado caso nenhum desses retorne verdadeiro (TRUE )

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


// PODEMOS COLOCAR MAIS DE UMA CONDIÇÃO NO PARAMETRO

const horas3 = 5


if(horas3 >= 0 && horas3 <= 11){
    //    Entre 0 até as 11 vai retornando Bom Dia;
    console.log(`Bom dia!!!`)
}else if(horas3 >= 12 && horas3 <= 17){
    //    Entre 12 até as 17 vai retornando Boa Tarde;
    console.log(`Boa Tarde!!!`)
}else if(horas3 >= 18 && horas3 <= 23){
    //    Entre 18 até as 23 vai retornando Boa Noite;
    console.log(`Boa Noite!!!`)
}


// ----   ---- //


//Construção basica

// IF - pode ser usado sozinho
// Else - preciso de um if antes do else 

//Posso ter varios elses e ifs uma unica função 


const tenhoGrana = true;

if(tenhoGrana){
    console.log(`Vou sair de casa`)
}else{
    console.log(`Não vou sair de casa`)
}


// ----   ---- //
const numb = 2

if(numb >= 0 && numb <=5){
    console.log(`o numero está entre 0 a 5`)
}else{
    console.log(`o numero NÃO está entre 0 a 5`)
}


//SE (numb >= 0 && numb <=5) acontece isso{
//      console.log(`o numero está entre 0 a 5`)
//}'SE NÃO acontece isso{
//      console.log(`o numero NÃO está entre 0 a 5`)
//}