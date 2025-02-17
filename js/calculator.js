let calculation = localStorage.getItem('calculation') || '';

showResult();
function updateCalculatr(value) {
        calculation += `${value}`;
        showResult();
        saveCalculator();
}

function saveCalculator() {
        localStorage.setItem('calculation', calculation)
}

function showResult() {
        const result = document.querySelector('.result');
        result.innerHTML = calculation;
}