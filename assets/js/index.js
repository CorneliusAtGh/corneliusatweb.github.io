// Copyright Year. Why? Cuz it's easier to change the value in one file than in all of them... And I'm lazy...

document.getElementById('copyright-year').innerText = '2025'; // Takes all elements of the set ID and sets their contents to the set year.

// Responsive Menu. Why? So the website looks good on all screens. :D

const button = document.getElementById('menu-button'); // Grabs the element with the set ID and assigns a const to it for ease of reference later.
const menu = document.getElementById('menu'); // Grabs the element with the set ID and assigns a const to it for ease of reference later.

button.addEventListener('click', (e) => { // Waits for the user to click the desired element.
    e.stopPropagation(); // Makes sure the code only applies to the desired element(s).
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block'; // Changes the display properties based on the number of times the user presses the button.
});

document.addEventListener('click', (e) => { // Waits for the user to click anything other than (but also including) the desired menu button.
    if (!menu.contains(e.target)) { // Checks if the menu is open.
        menu.style.display = 'none'; // If the menu is open, this closes it.
    }
});