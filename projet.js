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
    displayContent('contact');
});

videoButton.addEventListener('click', () => {
    displayContent('video');
});

photoButton.addEventListener('click', () => {
    displayContent('photo');
});

cvButton.addEventListener('click', () => {
    displayContent('cv');
});

function displayContent(content) {
    // Masquer tous les contenus
    popup.style.display = 'none';
    videoContainer.style.display = 'none';
    photoContainer.style.display = 'none';
    cvContainer.style.display = 'none';

    // Afficher le contenu spécifié
    if (content === 'contact') {
        popup.style.display = 'block';
    } else if (content === 'video') {
        videoContainer.style.display = 'block';
    } else if (content === 'photo') {
        photoContainer.style.display = 'block';
    } else if (content === 'cv') {
        cvContainer.style.display = 'block';
    }
}

closeButton.addEventListener('click', () => {
    // Fermer le contenu lorsqu'on clique sur le bouton de fermeture
    popup.style.display = 'none';
});

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