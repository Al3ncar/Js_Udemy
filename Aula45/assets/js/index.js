// try / catch / finally

try{ //  É EXECUTADO QUANDO NÃO HÁ ERROS 
    console.log("Abrindo arquivo ")
    console.log("Manipulando arquivo ")
    
} catch (err){ // É EXECUTADO QUANDO HÁ ERROS 
    console.log("Deu erro ao fechar arquivos ")
    
} finally{ //  SEMPRE SERÁ EXECUTADO 
    console.log("Fechando Arquivo ") 
}


    console.log("") // Espaço no console 


// Podemos construir estruturas alinhas desta maneira
// Dentro do try pode vir outro try 

try {
    console.log("Abrindo arquivo ")
    console.log("Manipulando arquivo ")

    try {
        console.log(a)
    } catch(err) {
        console.log(" Deu ERRO")
    } finally {
        console.log(" Tambem sou FINALLY")
    }

} catch (err) {
    console.log("Tratando ERRO ")

}finally{
    console.log("FINNALY: Sempre serei executado")
}


    console.log("") // Espaço no console 



// Instanceof

    // O instanceof é um operador que testa para ver se a prototype da propriedade de um construtor aparece em qualquer lugar na cadeia de protótipo de um objeto. O valor de retorno é um valor booleano ( TRUE || FALSE ).
//

// Exemplo:

function returnHours (data){
    if(!(data instanceof Date)) { console.log("Não sou uma data")}
} returnHours(" Seŕa que sou uma data ");

