function createBackgroundDecorations() {
    const background = document.getElementById('strawberryContainer');
    if (!background) return;

    function setFallProperties(item) {
        const duration = 8 + Math.random() * 8;
        item.style.setProperty('--start-x', `${Math.random() * 100}%`);
        item.style.setProperty('--fall-duration', `${duration}s`);
        item.style.setProperty('--fall-delay', `${-Math.random() * duration}s`);
        item.style.setProperty('--drift-x', `${(Math.random() - 0.5) * 180}px`);
        item.style.setProperty('--spin', `${(Math.random() - 0.5) * 600}deg`);
    }

    for (let i = 0; i < 15; i++) {
        const berry = document.createElement('span');
        berry.classList.add('floating-berry');
        berry.textContent = '🍓';
        berry.style.setProperty('--berry-size', `${20 + Math.random() * 18}px`);
        setFallProperties(berry);
        background.appendChild(berry);
    }

    for (let i = 0; i < 7; i++) {
        const milo = document.createElement('img');
        milo.classList.add('floating-milo');
        milo.src = 'Source/image-removebg-preview.png';
        milo.alt = '';
        milo.draggable = false;
        milo.style.setProperty('--milo-size', `${38 + Math.random() * 30}px`);
        setFallProperties(milo);
        background.appendChild(milo);
    }
}

// Function to handle the hidden surprise message button
function revealSurprise() {
    const surpriseText = document.getElementById('surprise-text');
    // Toggle the display of the message
    if (surpriseText.style.display === 'block') {
        surpriseText.style.display = 'none';
    } else {
        surpriseText.style.display = 'block';
    }
}

createBackgroundDecorations();