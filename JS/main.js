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


// document.addEventListener("DOMContentLoaded", function() {
//     const text = `Hoy en tu día, quiero felicitarte, expresarte que todos los días celebró tu vida. Le doy las infinitas gracias a Diosito y la Virgencita por haberte elegido cómo mi mami y a ti má por elegirme cómo tú hija, eres mi gran ejemplo a seguir, mi mentora, la más luchona, una grande guerrera... Gracias, gracias, gracias por amarme, aceptarme tal y cómo soy, perdonar mis errores, aconsejarme, ayudarme, apoyarme, pero sobre todo estoy infinitamente agradecida porque nunca me has dejado sola, jamás me has abandonado, siempre has estado conmigo, en buenas, malas, mejores y peores. Te amo con mi vida y alma enteras.❤️

//     Gracias, gracias, gracias por amarme infinitamente, incondicionalmente, por tu gran y noble corazón, por tu inmenso amor hacia mí🥹🥰🥲😍☺️😘🫶🏻🤞🏻🫰🏻... Es una verdadera bendición y dicha tenerte en mi vida🙏🏻... Te amo infinitamente❤️...🫂🤰🏻🤱🏻👩🏻‍🍼👩🏻‍🤝‍👩🏻👩🏻‍❤️‍👩🏻👩🏻👧🏻👩🏻‍🦱❤️‍🩹`;

//     const words = text.split(' ');
//     const halfwayIndex = Math.ceil(words.length / 2);
//     const firstHalf = words.slice(0, halfwayIndex).join(' ');
//     const secondHalf = words.slice(halfwayIndex).join(' ');

//     document.getElementById('page1').innerHTML = `<p>${firstHalf}</p>`;
//     document.getElementById('page2').innerHTML = `<p>${secondHalf}</p>`;
// });

document.addEventListener("DOMContentLoaded", function() {
    const text = `Hoy en tu día, quiero felicitarte, expresarte que todos los días celebró tu vida. Le doy las infinitas gracias a Diosito y la Virgencita por haberte elegido cómo mi mami y a ti má por elegirme cómo tú hija, eres mi gran ejemplo a seguir, mi mentora, la más luchona, una grande guerrera... Gracias, gracias, gracias por amarme, aceptarme tal y cómo soy, perdonar mis errores, aconsejarme, ayudarme, apoyarme, pero sobre todo estoy infinitamente agradecida porque nunca me has dejado sola, jamás me has abandonado, siempre has estado conmigo, en buenas, malas, mejores y peores. Te amo con mi vida y alma enteras.❤️
	Gracias, gracias, gracias por amarme infinitamente, incondicionalmente, por tu gran y noble corazón, por tu inmenso amor hacia mí🥹🥰🥲😍☺️😘🫶🏻🤞🏻🫰🏻... Es una verdadera bendición y dicha tenerte en mi vida🙏🏻... Te amo infinitamente❤️...🫂🤰🏻🤱🏻👩🏻‍🍼👩🏻‍🤝‍👩🏻👩🏻‍❤️‍👩🏻👩🏻👧🏻👩🏻‍🦱❤️‍🩹;`

    const words = text.split(' ');
    const halfwayIndex = Math.ceil(words.length / 1.39);
    const firstHalf = words.slice(0, halfwayIndex).join(' ');
    const secondHalf = words.slice(halfwayIndex).join(' ');

    document.getElementById('page1').innerHTML = `<p>${firstHalf}</p>`;
    document.getElementById('page2').innerHTML = `<p>${secondHalf}</p>`;

    const nextPageBtn = document.getElementById('nextPageBtn');
    const page1 = document.getElementById('page1');
    const page2 = document.getElementById('page2');

    nextPageBtn.addEventListener('click', function() {
        page1.style.display = 'none';
        page2.style.display = 'block';
    });
});

function goToPreviousPage() {
    document.getElementById('page1').style.display = 'block';
    document.getElementById('page2').style.display = 'none';
}
