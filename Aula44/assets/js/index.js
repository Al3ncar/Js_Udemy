// Try Catch => são semelhantea lógica de if e else

// caso a try não retorne algo, o catch será retornado
// try{ console.log(soma(1, 2)); console.log(soma('1', 2)) }
// catch( err ){ console.log("Não existe algo semelhante a isso... ") }


// Throw cria um possivel erro, sendo mostrado no console

// console.log(erroNaoo)

function soma (x , y) {
    if(typeof x !== 'number' || typeof y !== 'number'){throw new ReferenceError ('X ou Y não são numbers');}
    return x + y
}
try{ console.log(soma(1, 2)); console.log(soma('1', 2)) }
catch( err ){ console.log("Não existe algo semelhante a isso... ") }



