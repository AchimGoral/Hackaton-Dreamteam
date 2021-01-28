// Clear button for text input field

let clearAllButton = document.querySelector('.btn-clear');
clearAllButton.addEventListener('click', clear);

function clear() {
    let inputHeadline = document.querySelector(".form-control-headline");
    let inputText = document.querySelector(".form-control-text");
    inputHeadline.value = "";
    inputText.value = "";
}

// Create new Blog card

let containerCard;
let divCard;
let divCardBody;
let cardTitle;
let breakLine;
let cardText;

function createCard () {
    containerCard = document.querySelector('.blog-container-fluid');

    divCard = document.createElement('div');
    divCardBody = document.createElement('div');
    cardTitle = document.createElement('h5');
    breakLine = document.createElement('hr');
    cardText = document.createElement('p');

    divCard.classList.add('card');
    divCardBody.classList.add('card-body');
    cardTitle.classList.add('card-title');
    cardText.classList.add('card-text');

    divCardBody.appendChild(cardTitle);
    divCardBody.appendChild(breakLine);
    divCardBody.appendChild(cardText);
}

// Submit the post
let submitButton = document.querySelector(".btn-submit");

submitButton.addEventListener("click", addContent);

function addContent () {
    let inputHeadline = document.querySelector(".form-control-headline").value;
    let textField = document.querySelector(".form-control-text").value;
    createCard();
    let headline = document.createTextNode(inputHeadline);
    cardTitle.appendChild(headline);

    let text = document.createTextNode(textField);
    cardText.appendChild(text);
    
    containerCard.appendChild(divCardBody);
}