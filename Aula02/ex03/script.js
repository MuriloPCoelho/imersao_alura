function Calcular(){
    let dist = document.querySelector('input#valor')
    let res = document.querySelector('div#resultado')
    let distância = Number(dist.value)
    let anoLuz = 9460730777119.56
    let calculo = distância / anoLuz
    res.innerHTML = `${distância} km equivale à ${calculo.toFixed(15)} anos-luz`
}


// km para nos luz
// em quantos ano luz em x km
//1 ano na velocidade da luz =  9460730777119.56