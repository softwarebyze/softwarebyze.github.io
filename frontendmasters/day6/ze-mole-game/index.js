const sadTime = 1000;
const leavingTime = 1000;
let score = 0;

function getSadInterval() {
    return Date.now() + sadTime;
}

function getLeavingInterval() {
    return Date.now() + leavingTime;
}

function getGoneInterval() {
    return Date.now() + Math.floor(Math.random() * 18000) + 2000;
}

function getHungryInterval() {
    return Date.now() + Math.floor(Math.random() * 3000) + 2000;
}

function getKingStatus() {
    return Math.random() > 0.9;
}

const moles = [
    {
        status: "sad",
        next: getSadInterval(),
        king: false,
        node: document.getElementById('hole0')
    },
    {
        status: "sad",
        next: getSadInterval(),
        king: false,
        node: document.getElementById('hole1')
    },
    {
        status: "sad",
        next: getSadInterval(),
        king: false,
        node: document.getElementById('hole2')
    },
    {
        status: "sad",
        next: getSadInterval(),
        king: false,
        node: document.getElementById('hole3')
    },
    {
        status: "sad",
        next: getSadInterval(),
        king: false,
        node: document.getElementById('hole4')
    },
    {
        status: "sad",
        next: getSadInterval(),
        king: false,
        node: document.getElementById('hole5')
    },
    {
        status: "sad",
        next: getSadInterval(),
        king: false,
        node: document.getElementById('hole6')
    },
    {
        status: "sad",
        next: getSadInterval(),
        king: false,
        node: document.getElementById('hole7')
    },
    {
        status: "sad",
        next: getSadInterval(),
        king: false,
        node: document.getElementById('hole8')
    },
    {
        status: "sad",
        next: getSadInterval(),
        king: false,
        node: document.getElementById('hole9')
    }
]

function getNextStatus(mole) {
    switch (mole.status) {
        case "sad":
        case "fed":
            mole.next = getSadInterval();
            if (mole.king) {
                mole.node.children[0].src = './images/king-mole-leaving.png';
            } else {
                mole.node.children[0].src = './images/mole-leaving.png';
            }
            mole.status = "leaving";
            break;
        case "leaving":
            mole.next = getGoneInterval();
            mole.status = "gone";
            mole.node.children[0].classList.add("gone");
            break;
        case "gone":
            mole.status = "hungry";
            mole.next = getHungryInterval();
            mole.node.children[0].classList.add("hungry");
            mole.node.children[0].classList.remove("gone");
            if (mole.king) {
                mole.node.children[0].src = './images/king-mole-hungry.png';
            }
            else {
                mole.node.children[0].src = './images/mole-hungry.png';
            }
            break;
        case "hungry":
            mole.status = "sad";
            mole.next = getSadInterval();
            mole.node.children[0].classList.remove("hungry");
            mole.node.children[0].src = './images/mole-sad.png'
            break;
        }
}

function feed(event) {
    if (event.target.tagName !== 'IMG' || !event.target.classList.contains('hungry')) {
        return
    }

    const mole = moles[parseInt(event.target.dataset.index)]

    mole.status = 'fed';
    mole.next = getSadInterval();
    mole.node.children[0].classList.remove('hungry');
    if (mole.king) {
        mole.node.children[0].src = './images/king-mole-fed.png';
        score += 2;
    } else {
        mole.node.children[0].src = './images/mole-fed.png';
        score++;
    }

    if (score >= 10) {
        win();
        return;
    }

        let root = document.querySelector(':root');
        root.style.setProperty('--percent', `${score*10}%`);
}

function win() {
    document.querySelector('.game').classList.add('hide');
    document.querySelector('.win').classList.remove('hide');
}

let runAgainAt = Date.now() + 1500;
function nextFrame() {
    const now = Date.now();

    if (runAgainAt <= now) {
        for (let i = 0; i < moles.length; i++) {
            if (moles[i].next <= now) {
                getNextStatus(moles[i]);
            }
        }
        runAgainAt = now + 1000;
    }
    requestAnimationFrame(nextFrame);
}

document.querySelector('.game').addEventListener('click', feed);

nextFrame();


// let score = 0;

// function showMole(hole) {
//     holeImage = hole.childNodes[0];
//     holeImage.src = './images/mole-hungry.png';
//     holeImage.style.visibility = 'visible';
//     holeImage.addEventListener('click', () => holeClick(hole));
// }

// function hideMole(hole) {
//     hole.childNodes[0].style.visibility = 'hidden';
// }

// hole = document.querySelector('#hole3');
// // showMole(hole);

// let holeClick = function(hole) {
//     score++;
//     let root = document.querySelector(':root');
//     root.style.setProperty('--percent', `${score*10}%`);
//     console.log(score);
//     if (score === 10) {
//         let flexes = document.querySelectorAll('.flex');
//         let game = document.querySelector('.game');
//         game.classList.add('win');
//         flexes.forEach((flex) => {flex.style.visibility = 'hidden'});
//         let holes = document.querySelectorAll('.hole');
//         holes.forEach((hole) => {holeImage.style.visibility = 'hidden'});
//         let worm = document.querySelector('.worm');
//         worm.style.visibility = 'hidden';
//         console.log('u won boi')
//     }
// }