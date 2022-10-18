const circle = document.querySelector('.circle')
const clickme = document.querySelector('.clickme');
const img = document.querySelector('img');
circle.addEventListener('click', function (e) {
    clickme.classList.add('hidden');
    circle.style.width = '1000vh';
    circle.classList.add('zoom-in');
    img.classList.add('unhidden');
})