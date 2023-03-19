/* 
// While

    A declaração while cria um laço que executa uma rotina especifica enquanto a condição de teste for avaliada como verdadeira. A condição é avaliada antes da execução da rotina.

    sintaxe lógica: 

        while (condição) {
            rotina
        }

        while  =>  palavra reservada ;

        condição  =>  O que vai ser avalido
            true  =>  Continua o laço de reptição;
            false =>  Para o laço de repetição
        ;

        rotina  =>  
            Uma declaração que é executada enquanto a condição é avaliada como verdadeira
        ;

*/

let i = 0;

while(i <= 10){
    console.log(i)
    i++  // Incremento de 0 a 10
}