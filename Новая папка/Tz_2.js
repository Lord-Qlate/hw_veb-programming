let inputMov = document.querySelector('.Text_field')
let movie_list = document.querySelector('.movie_list')

let movies = [];

var savedMov = localStorage.getItem('movieList');
if(savedMov){
    movies = JSON.parse(savedMov)
    renderMov()
}

function Add(){
    let nameMov = inputMov.value.trim()
    if(nameMov){
        movies.push(nameMov)
        localStorage.setItem('movieList', JSON.stringify(movies));
    }
    inputMov.value = ''
    renderMov()
}

function renderMov(){
    movie_list.innerHTML = ''
    movies.forEach(mov => {
        const movie = document.createElement('div')

        movie.innerHTML = `  <p class="Text_size">${mov} </p>
        <button class="Btn_settings"></button> 
        <button class="Btn_del" onclick="Del('${mov}')">Удалить</button>             
            `
        movie_list.appendChild(movie)
    })
}

function Del(name) {
    movies = movies.filter(mov => mov !== name)
    localStorage.setItem('movieList', JSON.stringify(movies));
    renderMov()
}
