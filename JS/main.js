function openUp() {
	// Puts our <section id='cover'> element in a variable
	const $opencover = document.querySelector('#cover');
	
	// Adds a `class` attribute with value `animate` to our cover element
	$opencover.classList.add('animate');
	
	//OUTPUT:
	// <section id='cover' class='animate'>
}

function playMusic() {
    var audio = new Audio('/assets/img/「chiquitita ; abba _ español」 (online-audio-converter.com).mp3');
    audio.play();
}
