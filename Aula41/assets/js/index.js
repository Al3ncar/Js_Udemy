// Escreva uma função que receba 2 numeros e retorne o maior deles 

// Usando numeros aleatorios
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
