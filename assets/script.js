'use strict';

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

let imageNumber = 1;

function insertDots() {
	for (var i = 0; i < slides.length; i++) {
		const classes = i === 0 ? 'dot dot_selected' : 'dot'; 
		dots.innerHTML += `<span class="${classes}"></span>`;
	}
}

insertDots();

arrowLeft.addEventListener('click', function() {
	console.log('Arrow Left');
})

arrowRight.addEventListener('click', function() {
	const dotSelected = document.querySelector('.dot_selected');
	const dotNextSelect = document.querySelector('.dot_selected').nextSibling;

	dotSelected.classList.remove('dot_selected');
	dotNextSelect.classList.add('dot_selected');
	
	imageNumber++;
	const imageName = imageNumber === 4 ? `slide${imageNumber}.png` : `slide${imageNumber}.jpg`;
	const imageSrc = `./assets/images/slideshow/${imageName}`;
	const tagLine = slides[imageNumber - 1].tagLine;

	image.src = imageSrc;
	tagParagraph.innerHTML = tagLine;
})