const holes = document.querySelectorAll('.hole');
let appear = function(holes) {
    holes.forEach((hole) => {
        hole.childNodes[0].src = './images/mole-hungry.png'
        hole.childNodes[0].style.visibility = 'visible'
    })
}
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

let currentState = 'visible';

setInterval(() => change(currentState, holes), 800);