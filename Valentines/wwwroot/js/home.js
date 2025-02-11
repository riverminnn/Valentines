let button1 = document.querySelector(".button1");
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
    currentScale += 0.1; // Increase by 10%

    button1.style.transform = `scale(${currentScale})`;
    button1.style.transition = 'transform 0.3s ease';
});

button1.addEventListener('click', function () {
    window.location.href = 'Home/HeheYes'; // Redirect to the desired action
});