

let character = document.getElementById('character');
let result = document.getElementById('game_result');
let game = document.getElementById('game_box');
let score = document.getElementById('score');
var sound = document.getElementById('sound');
var count = 0;

// jump function

window.addEventListener('keydown',function(event){
    if(event.key === ' '){
            character.style.top = '120px';
            character.style.left = '20px';
            setTimeout(() => {
                character.style.top= '170px';
                character.style.left = '0px';
            }, 300);
            sound.play()
            count++;
        
    }
})
 // window.addEventListener('keypress',jump);

// game over result function

var game_block = document.getElementById('game_block');
setInterval(function gameOver(){
    var blockLeft = parseInt(window.getComputedStyle(game_block).getPropertyValue('left'));
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue('top'));
    if((blockLeft < 40) && (characterTop > 120))
    {
        result.style.display = 'block';
        game.style.display = 'none';
        score.innerHTML = `score : ${count}`;
    }
})

// var play = game.style.display = 'none';

// if(play === true)
// {
//     // window.addEventListener('keydown',function(play){
//     //     console.log(play.key);
//     // })
//     alert('Display NOne')
// }

