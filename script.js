let wrapper = document.querySelector(".wrapper");
if (wrapper) {
    wrapper.addEventListener("click", () => {
        wrapper.classList.toggle("open");
    });
}

const heartContainer = document.getElementById('heart-container');

function createHeart() {
    if (!heartContainer) return;
    const heart = document.createElement('div');
    heart.classList.add('heart');

    // Randomize the position of the heart
    heart.style.left = Math.random() * 100 + 'vw'; // Random horizontal position
    heart.style.top = '-40px';
    heart.style.animationDuration = (Math.random() * 2 + 2) + 's'; // Random fall duration
    heart.style.animationName = 'fall'; // Add falling animation
    heart.style.opacity = (0.6 + Math.random() * 0.4).toString();

    heartContainer.appendChild(heart);

    // Remove the heart after the animation ends
    heart.addEventListener('animationend', () => {
        heart.remove();
    });
}

// Create hearts at intervals
setInterval(createHeart, 120); // Adjust the interval as needed (120ms gives a dense fill)