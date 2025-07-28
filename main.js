import { getLista, limpaLista, adicionaNaLista, removeDaLista } from "./lista.js";

const olItens = document.querySelector("#itens");
const pEntrada = document.querySelector("#entrada");
const btnAdicionar = document.querySelector("#adicionar");
const btnLimpar = document.querySelector("#limpar");

btnLimpar.addEventListener("click", limparItensDeLista);
btnAdicionar.addEventListener("click", () => {
    atualizarLista(pEntrada.innerHTML)
});


function limparItensDeLista() {
    limpaLista();
    atualizarLista(null);
}

function atualizarLista(el) {
    olItens.innerHTML = "";
    if (el) {
        adicionaNaLista(el);
    }
    let lista = getLista();
    console.log(lista)
    for (let i = 0; i < lista.length; i++) {
        const li = document.createElement("li");
        li.textContent = lista[i];
        olItens.appendChild(li);
    }
}