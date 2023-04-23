// Escreva uuma função chamada ePaisagem que recebe dois argumentos, largura e altura de uma imagem ( Number ).
// Retorne true se a imagem estiver no modo paisagem. 

    function ePaisagemFun ( lag, alt ) { return lag > alt ? true : false; }
    console.log(ePaisagemFun(150, 50)) 

    const ePaisagemArr = (lag, alt) => lag > alt ? console.log(`Modo Paisagem`, true): console.log(`Modo vertical`, false);
    ePaisagemArr(150, 50) 

    // # # Codigo de aula # # //

    const ePaisagemArr2 = (largura, altura) => largura > altura;
    console.log(ePaisagemArr2(1980, 1080)) // A função já irá retornar true ou falso por padrão