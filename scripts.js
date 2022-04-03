alert ("funcionou!");

let prato;
let bebida;
let sobremesa;


function selecionarPrato(elemento) {
    
    const botaoSelecionado = document.querySelector(".selecionado");

    if(botaoSelecionado !== null){
        botaoSelecionado.classList.remove("selecionado");
    } 
     elemento.classList.add("selecionado");
     prato = elemento;

    
}

function selecionarBebida(elemento) {
    
    const botaoSelecionado = document.querySelector(".bebidas").querySelector(".selecionado");

    if(botaoSelecionado !== null){
        botaoSelecionado.classList.remove("selecionado");
    } 
     elemento.classList.add("selecionado");
     bebida = elemento;

}

function selecionarSobremesa(elemento) {
    
    const botaoSelecionado = document.querySelector(".sobremesa").querySelector(".selecionado");

    if(botaoSelecionado !== null){
        botaoSelecionado.classList.remove("selecionado");
    } 
     elemento.classList.add("selecionado");
     sobremesa = elemento;

}

function habilitarBotao(){
    
    if(prato && bebida && sobremesa){
        let botaodes = document.querySelector(".botao-desabilitado");
        botaodes.classList.add("escondido");
        let botaohab = document.querySelector(".botao-habilitado");
        botaohab.classList.remove("escondido");
    }
    
}
