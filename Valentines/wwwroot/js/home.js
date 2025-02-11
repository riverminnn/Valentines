let button1 = document.querySelector(".button1");
let messageIndex = 0; // Track message index for the No button clicks

const messages = [
    "Are you sure? You will make me sad 😢",
    "Noooooo 😭",
    "Please stop saying no 😫",
    "Huuuuuhuuuuu 😢"
];

// Target the existing <h2> element
const messageElement = document.querySelector("h2");

function showGif(gifName) {
    const gifContainer = document.getElementById('gif-container');
    const gifImage = document.getElementById('gif');
    gifImage.src = gifName;
    gifContainer.style.display = 'block';
}

function hideGif() {
    const gifContainer = document.getElementById('gif-container');
    gifContainer.style.display = 'none';
}

let currentScale = 1;

document.querySelector('.button2').addEventListener('click', function () {
    currentScale += 0.1; // Increase Yes button size by 10%
    button1.style.transform = `scale(${currentScale})`;
    button1.style.transition = 'transform 0.3s ease';

    // Update the existing <h2> element with messages
    messageElement.textContent = messages[messageIndex];

    // Keep the last message if we've gone through all
    if (messageIndex < messages.length - 1) {
        messageIndex++;
    }
});

button1.addEventListener('click', function () {
    setTimeout(function () {
        window.location.href = 'Home/HeheYes'; // Redirect after 1.5 seconds
    }, 1500);
});
