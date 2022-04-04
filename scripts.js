
let pratoesc;
let precopratoesc;
let bebidaesc;
let precobebidaesc;
let sobremesaesc;
let precosobremesaesc;
let precototal;


function selecionarPrato(elemento) {
    
    const botaoSelecionado = document.querySelector(".selecionado");

    if(botaoSelecionado !== null){
        botaoSelecionado.classList.remove("selecionado");
    } 
    elemento.classList.add("selecionado");
    prato = elemento;
    pratoesc = document.querySelector(".selecionado").querySelector("h1");
    pratoesc = pratoesc.innerHTML;
    console.log(pratoesc);
    precopratoesc = document.querySelector(".selecionado").querySelector(".preco");
    precopratoesc = precopratoesc.innerHTML.replace(",",".");
    precopratoesc = Number(precopratoesc);
    console.log(precopratoesc); 
}

function selecionarBebida(elemento) {
    
    const botaoSelecionado = document.querySelector(".bebidas").querySelector(".selecionado");

    if(botaoSelecionado !== null){
        botaoSelecionado.classList.remove("selecionado");
    } 
    elemento.classList.add("selecionado");
    bebida = elemento;
    bebidaesc = document.querySelector(".bebidas").querySelector(".selecionado").querySelector("h1");
    bebidaesc = bebidaesc.innerHTML;
    console.log(bebidaesc);
    precobebidaesc = document.querySelector(".bebidas").querySelector(".selecionado").querySelector(".preco");
    precobebidaesc = precobebidaesc.innerHTML.replace(",",".");
    precobebidaesc = Number(precobebidaesc);
    console.log(precobebidaesc);
}

function selecionarSobremesa(elemento) {
    
    const botaoSelecionado = document.querySelector(".sobremesa").querySelector(".selecionado");

    if(botaoSelecionado !== null){
        botaoSelecionado.classList.remove("selecionado");
    } 
    elemento.classList.add("selecionado");
    sobremesa = elemento;
    sobremesaesc = document.querySelector(".sobremesa").querySelector(".selecionado").querySelector("h1");
    sobremesaesc = sobremesaesc.innerHTML;
    console.log(sobremesaesc);
    precosobremesaesc = document.querySelector(".sobremesa").querySelector(".selecionado").querySelector(".preco");
    precosobremesaesc = precosobremesaesc.innerHTML.replace(",",".");
    precosobremesaesc = Number(precosobremesaesc);
    console.log(precosobremesaesc);
}

function habilitarBotao(){
    
    if(pratoesc && bebidaesc && sobremesaesc){
        let botaodes = document.querySelector(".botao-desabilitado");
        botaodes.classList.add("escondido");
        let botaohab = document.querySelector(".botao-habilitado");
        botaohab.classList.remove("escondido");
    }

    precototal = precopratoesc + precobebidaesc + precosobremesaesc;
    let total = precototal.toFixed(2)
    console.log(total);
    let wpp = document.querySelector("a");
    console.log(wpp);
    let uri = `Olá, gostaria de fazer o pedido:\n- Prato:${pratoesc} \n- Bebida: ${bebidaesc} \n- Sobremesa: ${sobremesaesc} \nTotal: R$ ${total}`
    let encoded = encodeURIComponent(uri);
    let pedido = `https://wa.me/5521983754188?text=${encoded}`
    console.log(uri);
    console.log(encoded);
    console.log(`https://wa.me/5521983754188?text=${encoded}`);
    wpp.setAttribute("href", pedido);
}
