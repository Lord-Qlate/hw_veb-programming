let inputMov = document.querySelector('.Text_field')
let game_list = document.querySelector('.game_list')

let games = [];

var savedGame = localStorage.getItem('gameList');
if(savedGame){
    games = JSON.parse(savedMov)
    renderList()
}

function Add(){
    let nameGame = inputMov.value.trim()
    if(nameGame){
        games.push(nameGame)
        localStorage.setItem('gameList', JSON.stringify(games));
    }
    inputMov.value = ''
    renderList()
}

function renderList(){
    game_list.innerHTML = ''
    games.forEach(mov => {
        const Lists = document.createElement('div')

        Lists.innerHTML = `  <p class="Text_size">${mov} </p>
        <button class="Btn_del" onclick="Del('${mov}')">Удалить</button>             
            `
        game_list.appendChild(Lists)
    })
}

function Del(name) {
    games = games.filter(mov => mov !== name)
    localStorage.setItem('gameList', JSON.stringify(games));
    renderList()
}