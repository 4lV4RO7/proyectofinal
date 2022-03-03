$('#homeLink').on('click', function() {
	$('#inlineFrameExample').attr('src', 'landing.html');
});

$('#servicesLink').on('click', function() {
	$('#inlineFrameExample').attr('src', 'servicios.html');
});

$('#galeryLink').on('click', function() {
	$('#inlineFrameExample').attr('src', 'galeria.html');
});

$('#aboutMeLink').on('click', function() {
	$('#inlineFrameExample').attr('src', 'mariaflorencia.html');
});

$('#contactLink').on('click', function() {
	$('#inlineFrameExample').attr('src', 'contacto.html');
});

$('.nav-link').on('click', function() {
	$('.navbar-collapse').collapse('hide');
});

$('.contact_button').on('click', function() {
	$('#inlineFrameExample').attr('src', 'contacto.html');
	console.log($('#inlineFrameExample', parent.document).html());
});




