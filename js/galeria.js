let galleryImg = [
	'img/living1.jpg',
	'img/mesa6.jpg',
	'img/mesa3.jpg',
	'img/mesa4.jpg',
	'img/mesa5.jpg',
	'img/fiesta1.jpg',
	'img/fiesta6.jpg',
	'img/fiesta3.jpg',
	'img/fiesta4.jpg',
	'img/fiesta5.jpg',
	'img/fiesta2.jpg',
	'img/fiesta7.jpg'
];
let galleryImgContainers = document.querySelectorAll('.prev-photos_row_wrapper_photo-container');

for (let i = 0; i < galleryImgContainers.length; i++) {
	let img = 'url("' + galleryImg[i] + '")';
	galleryImgContainers[i].style.backgroundImage = img;
}


//Expandir las fotos
$('.prev-photos_row_wrapper_photo-container').on('click', function() {
	let sourceUrl = $(this).css('background-image');
	sourceUrl = sourceUrl.substring(sourceUrl.indexOf("img/"), sourceUrl.indexOf("\")"));
	$('#photo-full').attr('src', sourceUrl);
	$('.photo-full').removeClass('hide-photo-full-container');
});

$('#photo-full-div').on('click', function() {
	$('.photo-full').addClass('hide-photo-full-container');
});



//Botones para recorrer la galeria
$('#prevImgButton').on('click', function() {
	let img = $('#photo-full').attr('src');
	$('#photo-full').attr('src', galleryImg[galleryImg.indexOf(img) - 1]);
});

$('#nextImgButton').on('click', function() {
	let img = $('#photo-full').attr('src');
	$('#photo-full').attr('src', galleryImg[galleryImg.indexOf(img) + 1]);
});