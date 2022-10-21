let score = 0;

function showMole(hole) {
    holeImage = hole.childNodes[0];
    holeImage.src = './images/mole-hungry.png';
    holeImage.style.visibility = 'visible';
    holeImage.addEventListener('click', () => holeClick(hole));
}

function hideMole(hole) {
    hole.childNodes[0].style.visibility = 'hidden';
}

hole = document.querySelector('#hole3');
showMole(hole);

let holeClick = function(hole) {
    score++;
    let root = document.querySelector(':root');
    root.style.setProperty('--percent', `${score*10}%`);
    console.log(score);
    if (score === 10) {
        let flexes = document.querySelectorAll('.flex');
        let game = document.querySelector('.game');
        game.classList.add('win');
        flexes.forEach((flex) => {flex.style.visibility = 'hidden'});
        let holes = document.querySelectorAll('.hole');
        holes.forEach((hole) => {holeImage.style.visibility = 'hidden'});
        let worm = document.querySelector('.worm');
        worm.style.visibility = 'hidden';
        console.log('u won boi')
    }
}