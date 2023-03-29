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




