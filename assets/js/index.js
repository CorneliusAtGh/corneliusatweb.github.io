// Copyright Year. Why? Cuz it's easier to change the value in one file than in all of them... And I'm lazy...

document.getElementById('copyright-year').innerText = '2025';

// Responsive Menu. Why? So the website looks good on all screens. :D

const button = document.getElementById('menu-button');
const menu = document.getElementById('menu');

button.addEventListener('click', (e) => {
    e.stopPropagation();
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
});

document.addEventListener('click', (e) => {
    if (!menu.contains(e.target)) {
        menu.style.display = 'none';
    }
});