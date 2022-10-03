// exercicio 1 
const frutas = ["laranja", "limão", "uva"];

// variavél //acessando o elemento dentro do documento HTML pela ID
let fruta1 = document.getElementById("fruta-1")
fruta1.innerHTML = frutas[0]      // ID do elemento
// variavel que guardei o elemento 
// + sintaxe de acesso (innerHTML)
// variavel que obtém o array + valor do indice

let fruta2 = document.getElementById("fruta-2")
fruta2.innerHTML = frutas[1]

let fruta3 = document.getElementById("fruta-3")
fruta3.innerHTML = frutas[2]

// exercicio 2
// função que vai ser exercida no evento onkeyup

function valorInput(){
    let input = document.getElementById("text")
    console.log(input.value);
}

// exercicio 3

// Função para preencher a fruta-4 que falta na lista.
function preencheFruta(){
    let text = document.getElementById("text")
    let fruta4 = document.getElementById("fruta-4")
    fruta4.innerHTML = text.value
}

// Função para adicionar mais uma fruta com um elemento <li>.
function adicionaFruta(){
    let text = document.getElementById("text")
    let frutaNovaNaLista  = document.getElementById("lista-de-frutas")
    frutaNovaNaLista.innerHTML += "<li>" + text.value + "</li>"
}


