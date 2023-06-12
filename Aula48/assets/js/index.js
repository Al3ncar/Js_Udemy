const inpTarefa = document.querySelector('.input-nova-tarefa')
const btnTarefa = document.querySelector('.btn-add-tarefa')
const taref = document.querySelector('.tarefa')

function criaLi(){
    const li = document.createElement("li"); return li;
}

function apagar(li){
    li.innerText += ' ';
    const btn = document.createElement('button');
    btn.innerHTML = 'Apagar';
    btn.setAttribute('class', 'apagar')
    li.appendChild(btn)
}

function limpInp(){
    inpTarefa.value = "";
    inpTarefa.focus();
}

function atualInp(textIn){
    const li = criaLi();
    li.innerText =  textIn;
    taref.appendChild(li);
    limpInp();
    apagar(li)
    savTaref()
};

inpTarefa.addEventListener('keypress', function(e){
    if(e.keyCode === 13){
        if(!inpTarefa.value) return; 
        atualInp(inpTarefa.value)
    }
})

btnTarefa.addEventListener('click', function(){
    if(!inpTarefa.value)return;
    atualInp(inpTarefa.value)
});

document.addEventListener('click', function(e){
    const el = e.target
    if(el.classList.contains('apagar')){
        el.parentElement.remove();
        savTaref()
    }
})


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