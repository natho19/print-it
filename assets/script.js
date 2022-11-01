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
let imageNumber = 0;

const insertDots = function () {
	for (var i = 0; i < slides.length; i++) {
		const classes = i === 0 ? 'dot dot_selected' : 'dot'; 
		dots.innerHTML += `<span class="${classes}"></span>`;
	}
}

const showItems = function (number) {
	const imageName = number === 3 ? `slide${number + 1}.png` : `slide${number + 1}.jpg`;
	const imageSrc = `./assets/images/slideshow/${imageName}`;
	const tagLine = slides[number].tagLine;

	image.src = imageSrc;
	tagParagraph.innerHTML = tagLine;
}

insertDots();

arrowLeft.addEventListener('click', function () {
	const dotSelected = document.querySelector('.dot_selected');
	const dotPreviousSelect = document.querySelector('.dot_selected').previousSibling;

	dotSelected.classList.remove('dot_selected');
	if (imageNumber > 0) dotPreviousSelect.classList.add('dot_selected');
	
	imageNumber--;

	if (imageNumber === -1) {
		imageNumber = 3;
		dots.lastElementChild.classList.add('dot_selected');
	}

	showItems(imageNumber);
})

arrowRight.addEventListener('click', function () {
	const dotSelected = document.querySelector('.dot_selected');
	const dotNextSelect = document.querySelector('.dot_selected').nextSibling;

	dotSelected.classList.remove('dot_selected');
	if (imageNumber < 3) dotNextSelect.classList.add('dot_selected');

	imageNumber++;

	if (imageNumber === 4) {
		imageNumber = 0;
		dots.firstElementChild.classList.add('dot_selected');
	}

	showItems(imageNumber);
})