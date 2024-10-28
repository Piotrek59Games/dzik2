async function flowAnimation(startEl, endEl) {
    const parent = document.querySelector('body');
    const numberOfImages = 10;

    for (let i = 0; i < numberOfImages; i++) {
        const img = document.createElement('img');
        img.src = 'img/acorn.png';
        img.classList.add('image');
        parent.appendChild(img);

        const startEl_pos = startEl.getBoundingClientRect();
        const endEl_pos = endEl.getBoundingClientRect();

        img.style.left = `${Math.random() * 100 + startEl_pos.left}px`;
        img.style.top = `${50 + startEl_pos.top}px`;

        flowAnimationAnimate(img, startEl_pos, endEl_pos);
        await delay(200);
    }
}
function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

function flowAnimationAnimate(img, startEl_pos, endEl_pos) {
    const duration = 1500 + Math.random() * 100; // Losowy czas trwania animacji

    const startX = startEl_pos.left + startEl_pos.width / 2; 
    const startY = startEl_pos.top + startEl_pos.height / 2; 
    const endX = endEl_pos.left + endEl_pos.width / 2;
    const endY = endEl_pos.top + endEl_pos.height / 1.5; 

    //const controlX = (startX + endX) / 2;
    //const controlY = Math.min(startY, endY) - 100; 

    img.animate([
        { transform: `translate(${startX - startX}px, ${startY - startY}px)` }, // Start
        //{ transform: `translate(${controlX - startX}px, ${controlY - startY}px)` }, // Kontrolny punkt
        { transform: `translate(${endX - startX}px, ${endY - startY}px)` } // Koniec
    ], {
        duration: duration,
        easing: 'ease-in-out',
        fill: 'forwards'
    }).onfinish = () => {
        img.remove();
    };
}

// Przykładowe wywołanie funkcji po naciśnięciu przycisku
/*document.getElementById('startAnimation').addEventListener('click', () => {
    const startElement = document.querySelector('.start-point');
    const endElement = document.querySelector('.end-point');
    flowAnimation(startElement, endElement);
});*/