function Escop(){

    const pags = document.querySelectorAll('p')
        const styleBody = getComputedStyle(document.body)
        const bodyColor = styleBody.backgroundColor

    for(let index of pags){
        index.style.backgroundColor = bodyColor;
        index.style.color = '#fff'; 
    }

}Escop() 