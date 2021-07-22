let backdrop = document.querySelector('.backdrop');
let modal = document.querySelector('.modal');
let ctaButton = document.querySelector('.main-nav__item--cta');

// add an event listner to the choose plan buttons, 
// which will open the modal when a button is clicked

// select plan buttons
let selectPlanButtons = document.querySelectorAll('.plan button');

for (let i = 0; i < selectPlanButtons.length; i++) {
    selectPlanButtons[i].addEventListener('click', function() {
        // modal.style.display = 'block';
        // backdrop.style.display = 'block';
        // modal.className = 'open' // this will override the initial class
        modal.classList.add('open');
        backdrop.classList.add('open');

    })
}

// lets close the modal when user clicks on No button or anywhere else on the screen
// the listener should be to No button and to backdrop

let noButton = document.querySelector('.modal__action--negative');

backdrop.addEventListener('click', function() {
    mobileNav.classList.remove('open');
    closeModal();
});

if (noButton) {
    noButton.addEventListener('click', closeModal); // this code gave errors on the pages where we do not have the No button, this is why we need to write an if statement
}

function closeModal() { // we get the same problem as above, because the modal only exists on the packages page
    if (modal) {
        modal.classList.remove('open');
    }
    backdrop.classList.remove('open');
}

// open and close the burger menu
// which will open and close the mobile navigation

let toggleButton = document.querySelector('.toggle-button');
let mobileNav = document.querySelector('.mobile-nav');

toggleButton.addEventListener('click', function() {
    // mobileNav.style.display = 'block';
    // backdrop.style.display = 'block';
    mobileNav.classList.add('open');
    backdrop.classList.add('open');
});

// Listent up for the animation on the cta button
ctaButton.addEventListener('animationstart', function (event) {
    console.log('Animation started', event);
})

ctaButton.addEventListener('animationend', function (event) {
    console.log('Animation ended', event);
})

ctaButton.addEventListener('animationiteration', function (event) {
    console.log('Animation iteration', event);
})