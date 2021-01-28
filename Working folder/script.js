// Clear button for text input field

let clearAllButton = document.querySelector('.btn-clear');
clearAllButton.addEventListener('click', clear);

function clear() {
    let inputArea = document.querySelector('.form-control');
    inputArea.value = "";
}

// Create new Blog card

function createCard () {
    let containerCard = document.querySelector('.blog-container-fluid');

    let divCard = document.createElement('div');
    let divCardBody = document.createElement('div');
    let cardTitle = document.createElement('h5');
    let breakLine = document.createElement('hr');
    let cardText = document.createElement('p');

    divCard.classList.add('card');
    divCardBody.classList.add('card-body');
    cardTitle.classList.add('card-title');
    cardText.classList.add('card-text');

    divCardBody.appendChild(cardTitle);
    divCardBody.appendChild(breakLine);
    divCardBody.appendChild(cardText);

    divCard.appendChild(divCardBody);
    containerCard.appendChild(divCard);
}