// BREAK E CONTINUE

//Break => faz com que meu laço pare
//Continue => faz com que meu laço pule o valor escolhido 

//exemplos:

const SeriaA =  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    for(let i of SeriaA){

        
        // Função Usando Continue 
        if( i === 2 ){
            console.log("Estou Pulando o 2");
            continue;
        }
        
        console.log(i);

        // Função Usando Break
        if( i === 7 ){
            console.log("Estou parando no 7");
            break;
        }

    }
