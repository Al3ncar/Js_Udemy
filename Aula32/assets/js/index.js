function myEscop(){
    const cont = document.querySelector('.cont')

    const elementos = [
        {tag: 'p', texto: 'Frase 1'},
        {tag: 'div', texto: 'Frase 2'},
        {tag: 'footer', texto: 'Frase 3'},
        {tag: 'section', texto: 'Frase 4'},
    ]

    const element = elementos.length // 4

    for(let i = 0; i < element; i++){
        const {tag, texto} = elementos[i]
    }
    
    function app(tag){
        const createElements = document.createElement(`${tag}`)  
        createElements.textContent = `${texto}`  
        cont.appendChild(`${createElements}`)
    }app(tag, texto)

}myEscop()















//const [t1, t2, t3, t4 ] = elementos
// console.log(elementos.length)

// console.log(t1)
// console.log(t2)
// console.log(t3)
// console.log(t4)