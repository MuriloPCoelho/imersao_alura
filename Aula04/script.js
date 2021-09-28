/*let listaFilmes = ['https://conteudo.solutudo.com.br/wp-content/uploads/2019/05/IT.png', 'https://upload.wikimedia.org/wikipedia/pt/f/f3/Deadpool_cartaz.jpg', 'https://br.web.img3.acsta.net/pictures/17/05/29/23/31/530814.jpg']

let listaSeries = ['https://i1.wp.com/www.literalmenteuai.com.br/wp-content/uploads/2017/12/Lucifer_S2_1536x2048.jpg?resize=274%2C398', 'https://br.web.img2.acsta.net/pictures/14/08/14/18/10/013182.jpg', 'https://media.fstatic.com/05H8prElBgpq_WPze7sFncUHvAE=/290x478/smart/media/movies/covers/2019/07/65921838_2516967771700828_6672962470136512512_n.jpg']*/

let listaFilmes = ['img_deadpool.png', 'img_it.png', 'img_spider-man.png']
let listaSeries = ['img_lucifer.png', 'img_the-witcher.png', 'img_scorpion.png']
let listaAnimes = ['img_kimetsu.png', 'img_onepunch.png', 'img_bokunohero.png']


let filmes = document.querySelector('div#filmes')
let series = document.querySelector('div#series')
let animes = document.querySelector('div#animes')

//só pude colocoar no mesmo 'for' por terem oo mesmo número de índice

for (let i = 0; i < listaFilmes.length; i++) {
    filmes.innerHTML += (`<img src=${listaFilmes[i]}>`)
    series.innerHTML += (`<img src=${listaSeries[i]}>`)
    animes.innerHTML += (`<img src=${listaAnimes[i]}>`)
}



