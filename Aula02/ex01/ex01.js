function Converter(){
    var realIn = document.querySelector('input#valor')
    var res = document.querySelector('div#valorConvertido')
    var real = Number(realIn.value)
    var dolar = (real / 5.23).toFixed(2)
    var euro = (dolar / 0.85).toFixed(2)

    res.innerHTML = `${real} reais equivale à ${dolar} dolares </br> e ${euro} euros`
}







/*var real = 47
var dolar = real / 5.23
var euro = dolar / 0.85

console.log(real)
console.log(dolar.toFixed(2))
console.log(euro.toFixed(2))*/
