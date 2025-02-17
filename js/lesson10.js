const amanBtn = document.querySelector('.amazon-btn');
amanBtn.classList.contains('js-button') ? console.log('yes') : console.log('no');


function changeColor(name) {
    const gameBtn = document.querySelector(name);
    if (!gameBtn.classList.contains('is-toggled')) {
        turnOffPreviousButton();
        gameBtn.classList.add('is-toggled');

    } else {
        gameBtn.classList.remove('is-toggled') 
    }
    
}

function turnOffPreviousButton() {
    const toggleBtn = document.querySelector('.is-toggled');
    if (toggleBtn) {
        toggleBtn.classList.remove('is-toggled');
    }
}