let root = document.querySelector(':root');

let game = document.querySelector('.game');
let holes = document.querySelectorAll('.hole');
let flexes = document.querySelectorAll('.flex');

let currentState;
let score = 0;

let appear = function(holes) {
    holes.forEach((hole) => {
        hole.childNodes[0].src = './images/mole-hungry.png';
        hole.childNodes[0].style.visibility = 'visible';
        hole.childNodes[0].addEventListener('click', () => {
            score++;
            root.style.setProperty('--percent', `${score*10}%`);
            console.log(score);
            if (score === 10) {
                game = document.querySelector('.game');
                game.classList.add('win');
                flexes = document.querySelectorAll('.flex');
                flexes.forEach((flex) => {flex.style.visibility = 'hidden'});
                holes.forEach((hole) => {hole.childNodes[0].style.visibility = 'hidden'});
                console.log('u won boi')
            }
        });
        currentState = 'visible';
    })
}
appear(holes);

let disappear = function(holes) {
    holes.forEach((hole) => {
        hole.childNodes[0].style.visibility = 'hidden';
    })
}

let change = function(state, holes) {
    if (state === 'visible') {
        disappear(holes);
        currentState = 'hidden';
    }
    if (state === 'hidden') {
        appear(holes);
        currentState = 'visible';
    }
}

// setInterval(() => change(currentState, holes), 800);