
const soundButtons = document.querySelectorAll(".sound-button");

function playSound(soundFile) {
    const audio = new Audio(soundFile);
    audio.play();
}
soundButtons.forEach((button) => {
    const soundFile = button.getAttribute("data-sound");
    button.addEventListener("click", () => {
        playSound(soundFile);
    });
});