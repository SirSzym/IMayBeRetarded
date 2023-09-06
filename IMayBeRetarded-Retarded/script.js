// Zdefiniuj referencje do elementów HTML
const soundButtons = document.querySelectorAll(".sound-button");

// Funkcja do odtwarzania dźwięku
function playSound(soundFile) {
    const audio = new Audio(soundFile);
    audio.play();
}

// Dodaj obsługę kliknięcia dla każdego przycisku dźwiękowego
soundButtons.forEach((button) => {
    const soundFile = button.getAttribute("data-sound");
    button.addEventListener("click", () => {
        playSound(soundFile);
    });
});