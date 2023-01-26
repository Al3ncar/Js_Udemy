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
}else if(horas2 <= 12){
    console.log(` Boa Tarde!!`)
}else if(horas2 <= 18){
    console.log(` Boa Tardezinha!! `)
}else if(horas2 <= 23){
    console.log(` Boa Noite!! `)
}else{
    console.log(`Não sei que horas são`)
}
