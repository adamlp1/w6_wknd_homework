document.addEventListener('DOMContentLoaded', init)

function init(){
  const seedData = [
    {title: "Demon's Souls", type: "Action RPG", difficulty: "hard"},
    {title: "Dark Souls", type: "Action RPG", difficulty: "hard"},
    {title: "Dark Souls II", type: "Action RPG", difficulty: "insane"},
    {title: "Dark Souls III", type: "Action RPG", difficulty: "easy"}
  ];


  const gameList = document.querySelector('#game-list');
  const theForm = document.querySelector('#game-form');

  seedData.forEach( (game) => {
    attachGame(game, gameList);
  })

  theForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const newGame = {
      title: this.game_title.value,
      type: this.game_type.value,
      difficulty: this.game_difficulty.value
    }
    attachGame(newGame, gameList);
  })

}

function attachGame(game, list){
  const newGame = document.createElement('li');
  newGame.textContent = `Title: ${game.title} Type: ${game.type} Difficulty: ${game.difficulty}`;
  list.appendChild(newGame);

}