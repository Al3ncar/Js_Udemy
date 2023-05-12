// Escreva uma função que receba 2 numeros e retorne o maior deles 

// Usando numeros aleatórios
function Escop(){

    function random(n1, n2, n3, n4){
        const r = (Math.random() * (n1 -  n2) + n2) 
        const r2 = Math.random() * (n3 -  n4) + n4
        const RS = [Math.floor(r), Math.floor(r2)]
        return RS
    }

    const [n1, n2] = [1, 10];
    const [n3, n4] = [1, 10];
    let rand = random(n1, n2, n3, n4);

    for(let i of rand){
        console.log(i)
        if(rand[0] > rand[1]){
            console.log(rand[0], `O valor ${rand[0]} é maior que ${rand[1]}`);
            break;
        }else if(rand[0] < rand[1]){
            console.log(rand[1], `O valor ${rand[1]} é maior que ${rand[0]}`);
            break;
        }else if(rand[0] === rand[1]){
            console.log('Ambos valores são iguais')
            break;
        }
    }
    
}Escop()

// Escolhento os numeros


function Escop2(){

    let n1 = 100; let n2 = 20;

    function V (n1, n2){
        n1 > n2 ?console.log( `${n1} é maior que ${n2}`) : console.log(`${n2} é maior que ${n1}`) 
    }V(n1, n2)

}Escop2()

// CODIGO DA AULA 


const max = (x, y) => x > y ? x : y;
console.log(max(10, 3)) 