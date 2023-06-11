const inpTarefa = document.querySelector('.input-nova-tarefa')
const btnTarefa = document.querySelector('.btn-add-tarefa')
const taref = document.querySelector('.tarefa')

function criaLi(){ 
    const li = document.createElement('li'); 
    return li; 
}

/* function atualizarInp (textInp) {
    const li = criaLi();
    li.innerText = textInp;
    Tar.appendChild(li);
} */

function atualInp(textIn){
    const li = criaLi();
    li.innerText =  textIn;
    taref.appendChild(li)
}

btnTarefa.addEventListener('click', () => {
    if(!inpTarefa) return; 
    atualInp(inpTarefa.value)
})

r



































/* function tesk(){
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

} tesk() */