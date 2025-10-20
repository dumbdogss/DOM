/* Exemplo 01 getElementById */
var elemento = document.getElementById("titulo")
//alert(elemento)
console.log(elemento)

/* Exemplo 02 - innerHTML */
/* innerHTML = manipula o dado*/
function mudarTitulo(){
    var elemento = document.getElementById("titulo")
    var elemento02 = document.getElementById("titulo02")
    elemento.innerHTML = "Manipulando o titulo via JS"
    elemento02.innerHTML = "Maria Clara koda"
}

/* Exemplo 03- Mudar estilo */
function mudarEstilo(){
    var elemento = document.getElementById("titulo")
    elemento.style.color = "purple"
    elemento.style.backgroundColor = "pink"
    elemento.style.fontSize = "70px"
}

/* Exemplo 04 - classList.add localiza o elemento desejado e insere uma classe HTML */
function destacar(){
    var elemento = document.getElementById("titulo02")
    elemento.classList.add("destaque")
}

function remover(){
    var elemento = document.getElementById("titulo02")
    elemento.classList.remove("destaque")
}

function alternar(){
    var elemento = document.getElementById("titulo02")
    elemento.classList.toggle("destaque")
}

/* Exemplo 05 - Cria um novo elemento no HTML junto com id*/
function adicionarTexto(){
    var novo = document.createElement("p")
    novo.innerText = "novo paragráfo criado aki com JS"
    novo.id = "paragrafo"
    /* Depois de criar o elemento vamos colocar o elemento p na div container */
    var container = document.getElementById("container")
    container.appendChild(novo)
}

function removerTexto(){
    var paragrafo = document.getElementById("paragrafo")
    //teste para remover somente se tiver paragrafo
    if(paragrafo){
        paragrafo.remove()
    }
    else{
        alert("Não há texto para remover!")
    }
}

function removerTudo(){
    var paragrafos = document.getElementById("container")
    if(paragrafos){
        paragrafos.remove()
    }
}

function colorir(){
    var itens = document.querySelectorAll("p")
    for(var i=0; i<itens.length; i++){
        itens[i].style.color = "blue"
    }
}