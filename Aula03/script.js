let aleatorio = parseInt(Math.random() * 11)
let chances = document.querySelector('p#chances')
let res = document.querySelector('div#resultado')
let contador = 4
chances.innerHTML = `Chances: ${contador}`

function Chutar(){
    let chute = Number(document.querySelector('input#valor').value)
    
    if (contador == 0){
        alert('Você perdeu!')
        location.reload()
    }else if (chute > 10 || chute < 0){
        alert('[ERRO] Número inválido, digite um núumero de 0 a 10.')
    } else if (chute == aleatorio){
        res.innerHTML = 'Você acertou!'
    } else {
        res.innerHTML = `Você errou!`
        contador--
        chances.innerHTML = `Chances: ${contador}`
    }
}