function Converter(){
    let temp = document.querySelector('input#valor')
    let temperatura = Number(temp.value)
    let checkTemp = document.getElementsByName('radtemp')
    let res = document.querySelector('div#valorConvertido')
    let imagem = document.querySelector('div#img')

    let img = document.createElement('img')
    img.setAttribute('src','temp2.png')

    if(checkTemp[0].checked){
        const kelvin = temperatura + 273.15
        const fahrenheit = (temperatura * 1.8) + 32
        res.innerHTML = `${temperatura}°C equivale à ${kelvin}K </br> e ${fahrenheit}°F`
    } else if(checkTemp[1].checked){
        const celsius = temperatura - 273.15
        const fahrenheit = (temperatura - 273.15) * 1.8 + 32
        res.innerHTML = `${temperatura}K equivale à ${celsius.toFixed(2)}°C </br> e ${fahrenheit.toFixed(2)}°F`
    } else if(checkTemp[2].checked){
        const celsius = (temperatura - 32) * (5/9)
        const kelvin = (temperatura - 32) * (5/9) + 273.15
        res.innerHTML = `${temperatura}°F equivale à ${celsius.toFixed(2)}°C </br> e ${kelvin.toFixed(2)}K`
    }
    imagem.appendChild(img)
}