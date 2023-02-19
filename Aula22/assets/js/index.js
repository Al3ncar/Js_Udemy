function Escop(){

    document.querySelector('#ativar').addEventListener('click', myEscop)
    document.querySelector('#remover').addEventListener('click', actionRemove)

    function myEscop(){
        let e = document.querySelector('#executar');

        e.addEventListener('click', action1);
        e.addEventListener('click', action2);
    };

    function action1(){
        let t = new Date();
        document.querySelector('#time').textContent = t.getSeconds();
    }
    function action2(){  
        let t = new Date();
        document.querySelector('#time2').textContent = t.getSeconds();
    }

    const actionRemove = () => {document.querySelector('#executar').removeEventListener('click', action2)}

}Escop()


function Escop(){
    document.querySelector('#ativar').addEventListener('click', myEscop);
    document.querySelector('#remove').addEventListener('click', removes);
    function myEscop(){
        let e = document.querySelector('#executar');

        e.addEventListener('click', action1);
        e.addEventListener('click', action2);
    }
    function action1(){
        let t = new Date();
        document.querySelector('#time').textContent = t.getSeconds();
    }
    function action2(){  
        let t = new Date();
        document.querySelector('#time2').textContent = t.getSeconds();
    }
    function removes(){
        document.querySelector('#executar').removeEventListener('click', action1)
    }

}Escop()