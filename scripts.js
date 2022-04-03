alert ("funcionou!");

let prato;
let bebida;
let sobremesa;


function selecionarPrato(prato) {
    
    const botaoSelecionado = document.querySelector(".selecionado");
    console.log(botaoSelecionado);

    if(botaoSelecionado !== null){
        botaoSelecionado.classList.remove("selecionado");
    } 
     prato.classList.add("selecionado");
}

function selecionarBebida(bebida) {
    
    const botaoSelecionado = document.querySelector(".bebidas").querySelector(".selecionado");
    console.log(botaoSelecionado);

    if(botaoSelecionado !== null){
        botaoSelecionado.classList.remove("selecionado");
    } 
     bebida.classList.add("selecionado");
}

function selecionarSobremesa(sobremesa) {
    
    const botaoSelecionado = document.querySelector(".sobremesa").querySelector(".selecionado");
    console.log(botaoSelecionado);

    if(botaoSelecionado !== null){
        botaoSelecionado.classList.remove("selecionado");
    } 
     sobremesa.classList.add("selecionado");
}

