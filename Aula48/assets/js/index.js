function tesk(){
    let cont = document.querySelector('.container');
    let inp = document.querySelector('.input-nova-tarefa');
    let btn = document.querySelector('.btn-add-tarefa');
    let taref = document.querySelector('.tarefas');

    let Val;

    function ValResult (Val){
        if(Val === false) return 'sei';
        if(Val === true ) return 'Ahta ';
        return Val
    }

    document.addEventListener('click', (e) => {
        const el = e.target;
        Val = inp.value;

        if(el.classList.contains('btn-add-tarefa')){
            taref.innerHTML += `<li>${Val}</li>` + `<button>Apagar</button>`
        }
    })

} tesk()