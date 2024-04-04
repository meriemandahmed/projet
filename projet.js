// Partie 1 : Lampe Digitale
let btn = document.querySelector('.btn');
let body = document.querySelector('body');
let audio = document.querySelector('#audio');
btn.onclick = function(){
body.classList.toggle('on');
audio.play();
}
// Partie 2 : Portail dynamique
const contactButton = document.getElementById('contactButton');
const videoButton = document.getElementById('videoButton');
const photoButton = document.getElementById('photoButton');
const cvButton = document.getElementById('cvButton');
const popup = document.getElementById('popup');
const closeButton = document.getElementById('closeButton');
const videoContainer = document.getElementById('videoContainer');
const photoContainer = document.getElementById('photoContainer');
const cvContainer = document.getElementById('cvContainer');

contactButton.addEventListener('click', () => {
    popup.style.display = 'block';
});

closeButton.addEventListener('click', () => {
    popup.style.display = 'none';
});

videoButton.addEventListener('click', () => {
    videoContainer.style.display = 'block';
});

photoButton.addEventListener('click', () => {
    photoContainer.style.display = 'block';
});

cvButton.addEventListener('click', () => {
    cvContainer.style.display = 'block';
});

// Partie 3 : Jeu de devinez nombre
const randomNumber = Math.floor(Math.random() * 100) + 1;
const userGuessInput = document.getElementById('userGuess');
const checkButton = document.getElementById('checkButton');
const resultDisplay = document.getElementById('result');

checkButton.addEventListener('click', () => {
    const userGuess = parseInt(userGuessInput.value);
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        resultDisplay.textContent = 'Veuillez entrer un nombre entre 1 et 100.';
    } else if (userGuess === randomNumber) {
        resultDisplay.textContent = 'Bravo! Vous avez deviné le nombre correctement.';
    } else if (userGuess < randomNumber) {
        resultDisplay.textContent = 'Le nombre est trop petit.';
    } else {
        resultDisplay.textContent = 'Le nombre est trop grand.';
    }
});
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(contactForm);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    console.log('Nom:', name);
    console.log('Email:', email);
    console.log('Message:', message);
    console.log('Message envoyé avec succès!');
    contactForm.reset();
});