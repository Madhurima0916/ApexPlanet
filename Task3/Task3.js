
const images = [
    "https://picsum.photos/id/1015/600/300",
    "https://picsum.photos/id/1016/600/300",
    "https://picsum.photos/id/1018/600/300"
];
let current = 0;

function showImage(index) {
    const img = document.getElementById("carouselImage");
    img.src = images[index];
}

function prevImage() {
    current = (current - 1 + images.length) % images.length;
    showImage(current);
}

function nextImage() {
    current = (current + 1) % images.length;
    showImage(current);
}

async function fetchJoke() {
    const jokeText = document.getElementById("jokeText");
    jokeText.textContent = "Loading...";

    try {
        const response = await fetch("https://official-joke-api.appspot.com/random_joke");
        const data = await response.json();
        jokeText.textContent = `${data.setup} — ${data.punchline}`;
    } catch (error) {
        jokeText.textContent = "Failed to load joke.";
    }
}
