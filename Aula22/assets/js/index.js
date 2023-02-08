function Escop(){
    const btnAdd = document.querySelector('#ativar').addEventListener('click', addButon)
    const btnRemove = document.querySelector('#remover').addEventListener('click', remov)

    function addButon(){
        let e = document.querySelector('#executar')

        e.addEventListener('click', Exec)
        e.addEventListener('click', Exec2)
    } 

    function Exec(){
        let temp = new Date()
        document.querySelector('#time').textContent = temp.getSeconds()
        
    }

    function Exec2(){
        let temp = new Date()
        document.querySelector('#time2').textContent = temp.getSeconds() 
    }

    function remov(){
        let eRemove = document.querySelector('#executar').removeEventListener('click', Exec)
    }
    
} Escop()
