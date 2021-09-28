function adicionarJogador(){ 
    nomePlayer = document.querySelector('input#nome').value
    if (nomePlayer != 0){
        let Jogador = {nome: "Jorge", vitorias: 0, empates: 0, derrotas:0, pontos: 0}
        Jogador.nome = nomePlayer
        listaJogadores.push(Jogador) //adiciona o jogador na lista
        Jogador.pontos = calcularPontos(Jogador) //chamada da função 
        exibeJogadoresNaTela(listaJogadores) //executa(chama) a função exibeJogadoresNaTela
    } else {
        alert('[ERRO] Nome inválido!')
    }
}

function calcularPontos (jogador){
    let pontos = (jogador.vitorias) * 3 + jogador.empates - jogador.derrotas
    return pontos
}

let listaJogadores = []

function exibeJogadoresNaTela (listaJogadores){
    let elemento = ""
    for (let i = 0; i < listaJogadores.length; i++){
        elemento += `<tr>
                        <td>${listaJogadores[i].nome}</td>
                        <td>${listaJogadores[i].vitorias}</td>
                        <td>${listaJogadores[i].empates}</td>
                        <td>${listaJogadores[i].derrotas}</td>
                        <td>${listaJogadores[i].pontos}</td>
                        <td><button onClick="adicionarVitoria(${i})">Vitória</button></td>
                        <td><button onClick="adicionarEmpate(${i})">Empate</button></td>
                        <td><button onClick="adicionarDerrota(${i})">Derrota</button></td>
                    </tr>`
    }
    let tabelaJogadores = document.querySelector('tbody#tabelaJogadores')
    tabelaJogadores.innerHTML = elemento
}


 
function adicionarVitoria(i){
    let jogador = listaJogadores[i]
    jogador.vitorias++
    jogador.pontos = calcularPontos(jogador)
    exibeJogadoresNaTela(listaJogadores)
}

function adicionarEmpate(i){
    let jogador = listaJogadores[i]
    jogador.empates++
    jogador.pontos = calcularPontos(jogador)
    exibeJogadoresNaTela(listaJogadores)
}

function adicionarDerrota(i){
    let jogador = listaJogadores[i]
    jogador.derrotas++
    jogador.pontos = calcularPontos(jogador)
    exibeJogadoresNaTela(listaJogadores)
}

function zerarTabela(){
    listaJogadores = []
    exibeJogadoresNaTela(listaJogadores)
}