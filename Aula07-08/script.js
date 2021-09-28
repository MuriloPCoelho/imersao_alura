let cartas = [
    carta1 = {
        nome: 'Mulan',
        atributos: {
            ataque: 9,
            defesa: 8,
            magia: 1
        },
        imagem: 'https://www.rbsdirect.com.br/imagesrc/17314778.jpg?w=700'
    },

    carta2 = {
        nome: 'Moana',
        atributos: {
            ataque: 5,
            defesa: 3,
            magia: 8
        },
        imagem: 'https://www.opushuman.com.br/wp-content/uploads/2020/01/MOANA-UM-PARADOXO-ENTRE-A-FANTASIA-E-A-REALIDADE.jpg'
    },

    carta3 = {
        nome: 'Elsa',
        atributos: {
            ataque: 2,
            defesa: 5,
            magia: 10
        },
        imagem: 'https://akns-images.eonline.com/eol_images/Entire_Site/2014212/rs_1024x759-140312104515-1024.Elsa-Frozen-Disney.jl.031214_copy.jpg?fit=around%7C1024:759&output-quality=90&crop=1024:759;center,top'
    },

    carta4 = {
        nome: 'Bela',
        atributos: {
            ataque: 5,
            defesa: 5,
            magia: 5
        },
        imagem: 'https://static.wikia.nocookie.net/disney/images/1/1b/Profile_-_Belle.jpeg/revision/latest?cb=20190312024430'
    },

    carta5 = {
        nome: 'Cinderela',
        atributos: {
            ataque: 3,
            defesa: 5,
            magia: 7
        },
        imagem: 'https://i.pinimg.com/originals/0d/32/83/0d3283f59808f7eb9740b94c490b2105.jpg'
    },

    carta6 = {
        nome: 'Tiana',
        atributos: {
            ataque: 5,
            defesa: 6,
            magia: 3
        },
        imagem: 'https://res.cloudinary.com/jerrick/image/upload/f_jpg,fl_progressive,q_auto,w_1024/jn6xbph8wpe3duxyj4o8.jpg'
    },
]

let cartaMaquina
let cartaJogador


function sortearCarta() {
    let indiceCartaMaquina = parseInt(Math.random() * cartas.length)
    cartaMaquina = cartas[indiceCartaMaquina] //cartaMaquina recebe cartas no indice indiceCartaMaquina

    let indiceCartaJogador = parseInt(Math.random() * cartas.length)
    while (indiceCartaMaquina == indiceCartaJogador){
        //enquanto os indices forem iguais continua sendo executado
        indiceCartaJogador = parseInt(Math.random() * cartas.length)
    }
    cartaJogador = cartas[indiceCartaJogador] //cartaJogador recebe cartas no indice indiceCartaJogador

    document.querySelector('button#btnSortear').disabled = true
    document.querySelector('button#btnJogar').disabled = false

    exibirOpcoes()
    mostrarCarta()
    
    console.log(cartaJogador)
}

function mostrarCarta() {
    let localCarta = document.querySelector('div#imagemcarta')
    // localCarta.innerHTML = `<img src=${cartaJogador.imagem}>`
    localCarta.innerHTML = 
    `<table>
        <thead>
            <tr>
                <th>Carta</th>
                <th>Atributos</th>
            </tr>
        </thead>
        <tbody id="tabelaJogadores">
            <tr>
                <td rowspan="3"><img width="100%" src=${cartaJogador.imagem}></td>
                <td>Ataque: ${cartaJogador.atributos.ataque}</td>
            </tr>
            <tr>
                <td>Defesa: ${cartaJogador.atributos.defesa} </td>
            </tr>
            <tr>
                <td>Magia: ${cartaJogador.atributos.magia}</td>
            </tr>
        </tbody>`
}

function exibirOpcoes() {
    var opcoes = document.querySelector('div#opcoes')
    var opcoesRadio = ''

    for (let atributo in cartaJogador.atributos){
        //percorre/executa para cada item de cartaJogador.atributos
        opcoesRadio += `<input id='rad' type='radio' name='atributo' value='${atributo}'> ${atributo} |`
    }
    opcoes.innerHTML = opcoesRadio
}

function obtemAtributoSelecionado() { //determina qual o atributo foi selecionado 
    let radioAtributos = document.getElementsByName('atributo')
        for (let i = 0; i < radioAtributos.length; i++){
            if (radioAtributos[i].checked){
            return radioAtributos[i].value
            }
        }

}

function jogar() {
    let atributoSelecionado = obtemAtributoSelecionado() //chamada da funçao de escolha de atributo
    let elementoResultado = document.querySelector('div#resultado')
    let valorCartaJogador = cartaJogador.atributos[atributoSelecionado]
    let valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado]
    if (valorCartaJogador > valorCartaMaquina) {
        elementoResultado.innerHTML = `Você venceu! 🏆 </br> Seu oponente tinha ${cartaMaquina.nome} com ${valorCartaMaquina} de ${atributoSelecionado}`
    } else if (valorCartaJogador < valorCartaMaquina) {
        elementoResultado.innerHTML = `Você Perdeu! 🙁 </br> Seu oponente tinha ${cartaMaquina.nome} com ${valorCartaMaquina} de ${atributoSelecionado}`
    } else {
        elementoResultado.innerHTML = `Empatou! 😐 </br> Seu oponente tinha ${cartaMaquina.nome} com ${valorCartaMaquina} de ${atributoSelecionado}`
    }

    document.querySelector('button#reinicia').disabled = false

    console.log(cartaJogador.atributos[atributoSelecionado])
    console.log(cartaMaquina)
    console.log(valorCartaMaquina)
    console.log(atributoSelecionado)
    
}

function reiniciar() {
    location.reload()
}
