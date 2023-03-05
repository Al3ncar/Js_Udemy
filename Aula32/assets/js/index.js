function myEscop(){

    const elementos = [
        {tag: 'p', texto: 'Frase 1'},
        {tag: 'div', texto: 'Frase 2'},
        {tag: 'footer', texto: 'Frase 3'},
        {tag: 'section', texto: 'Frase 4'},
    ];

    const cont = document.querySelector('main');
    const divElement = document.createElement('div');
    cont.appendChild(divElement); 

    for(let i = 0; i < elementos.length; i++){

        const {tag, texto} = elementos[i];
            
            const createElements = document.createElement(`${tag}`) ; 
            createElements.textContent = `${texto}`;
            divElement.appendChild(createElements);
    }
    
}myEscop();


/* function myEscop(){

    const elementos = [
        {tag: 'p', texto: 'Frase 1'},
        {tag: 'div', texto: 'Frase 2'},
        {tag: 'footer', texto: 'Frase 3'},
        {tag: 'section', texto: 'Frase 4'},
    ];

    for(let i = 0; i < elementos.length; i++){

        const {tag, texto} = elementos[i];
        const cont = document.querySelector('.cont');
            
            const createElements = document.createElement(`${tag}`) ; 
            createElements.textContent = `${texto}`;
            cont.appendChild(createElements);
    }

}myEscop();
 */

/* function myEscop(){

    const elementos = [
        {tag: 'p', texto: 'Frase 1'},
        {tag: 'div', texto: 'Frase 2'},
        {tag: 'footer', texto: 'Frase 3'},
        {tag: 'section', texto: 'Frase 4'},
    ]

    for(let i = 0; i < elementos.length; i++){

        const {tag, texto} = elementos[i]
        const cont = document.querySelector('.cont')

        function app(tag, texto, cont){

            const createElements = document.createElement(`${tag}`)  
            createElements.textContent = `${texto}`  
            cont.appendChild(createElements)

        }app(tag, texto, cont)
    }

}myEscop()
 */

//const [t1, t2, t3, t4 ] = elementos
// console.log(elementos.length)

// console.log(t1)
// console.log(t2)
// console.log(t3)
// console.log(t4)