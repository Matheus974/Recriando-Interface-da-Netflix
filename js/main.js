const API_KEY = 'api_key=f5cdc396ac004f7e79b4f6810a1bbe80';
const URL_BASE = 'https://api.themoviedb.org/3/';
const URL_POPULAR = 'movie/popular?language=pt-BR&page=1&';
const MENU = document.querySelector('.botao-menu')





const secaoFilmes = document.getElementsByClassName('owl-carousel owl-theme');


function buscarImagens(url) {
    let apiUrl = URL_BASE + url + API_KEY;
    fetch(apiUrl).then(res => res.json()).then(data => {
        mostreFilmes(data.results)
    })
}


 async function mostreFilmes(data) {
    for(i=0; i < data.length; i++) {
        let elemento = document.createElement('div');
        elemento.classList.add('item')
        elemento.innerHTML += `<img class='box-filme' src="https://image.tmdb.org/t/p/w500/${data[i].poster_path}" alt="capa de ${data[i].title}">`

        secaoFilmes[0].appendChild(elemento)
    }

     showCarrossel();
}

MENU.addEventListener('click', () => {
    let menuMobile = document.querySelector('.mobile-menu')

    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open')
    } else {
        menuMobile.classList.add('open')
    }
})



buscarImagens(URL_POPULAR);








