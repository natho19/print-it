'use strict';

// Définition des variables
const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const arrowLeft = document.querySelector('.arrow_left');
const arrowRight = document.querySelector('.arrow_right');
const dots = document.querySelector('.dots');
const image = document.querySelector('#banner img');
const tagParagraph = document.querySelector('#banner p');
let imageNumber = 0;

// Affichage des bullet points
const insertDots = function () {
	for (var i = 0; i < slides.length; i++) {
		const classes = i === 0 ? 'dot dot_selected' : 'dot'; 
		dots.innerHTML += `<span class="${classes}"></span>`;
	}
}

// Affichage des informations du carrousel (chemin de l'image, texte)
const showItems = function (number) {
	const imageName = number === 3 ? `slide${number + 1}.png` : `slide${number + 1}.jpg`; // image1.jpg, image2.jpg, image3.jpg, image4.png
	const imageSrc = `./assets/images/slideshow/${imageName}`;
	image.src = imageSrc;
	tagParagraph.innerHTML = slides[number].tagLine;
}

insertDots();

// Défilement du carrousel au clic de la flèche gauche
arrowLeft.addEventListener('click', function () {
	const dotSelected = document.querySelector('.dot_selected');
	const dotPreviousSelect = dotSelected.previousSibling;

	// Changer le bullet point actif au précédant
	dotSelected.classList.remove('dot_selected');
	if (imageNumber > 0) dotPreviousSelect.classList.add('dot_selected'); // dotPreviousSelect est disponible uniquement quand imageNumber > 0
	
	imageNumber--;

	// Afficher la dernière image et le dernier bullet point quand on est sur la première image
	if (imageNumber === -1) {
		imageNumber = 3;
		dots.lastElementChild.classList.add('dot_selected');
	}

	showItems(imageNumber);
})

// Défilement du carrousel au clic de la flèche droite
arrowRight.addEventListener('click', function () {
	const dotSelected = document.querySelector('.dot_selected');
	const dotNextSelect = dotSelected.nextSibling; 

	dotSelected.classList.remove('dot_selected');
	if (imageNumber < 3) dotNextSelect.classList.add('dot_selected'); // dotNextSelect est disponible uniquement quand imageNumber < 3

	imageNumber++; 

	// Afficher la première image et le premier bullet point quand on est sur la dernière image
	if (imageNumber === 4) {
		imageNumber = 0;
		dots.firstElementChild.classList.add('dot_selected');
	}

	showItems(imageNumber);
})