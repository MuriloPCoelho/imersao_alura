function adicionarFilme(){
    let urlFilme = document.querySelector('input#filme').value
    alert('clicou')

    function verificar(){
        if (urlFilme.endsWith(".jpg")){
            return true
        } else if (urlFilme.endsWith(".JPG")){
            return true
        }else {
            return false
        }
    }

    if (verificar()){
        listarFilmes()
    } else {
        alert('[ERRO] Endereço de inválido!')
    }

    function listarFilmes(){
        let adFilme = `<img src=${urlFilme}>`
        let local = document.querySelector('div#listaFilmes')
        local.innerHTML += adFilme
    }
    
    document.querySelector('input#filme').value = ''
}

