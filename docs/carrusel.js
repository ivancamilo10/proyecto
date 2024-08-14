let currentIndex = 0;
const carousel = document.querySelector('.carousel');
const totalCards = document.querySelectorAll('.carousel-card').length;

function moveCarousel(direction) {
    currentIndex = (currentIndex + direction + totalCards) % totalCards; // Ciclo entre las cards
    const moveX = currentIndex * (100 / 3); // Mover una card cada vez
    carousel.style.transform = `translateX(-${moveX}%)`;
}

// Cambiar cada 2 segundos si no hay interacción
let autoSlide = setInterval(() => moveCarousel(1), 2000);

document.querySelectorAll('.carousel-button').forEach(button => {
    button.addEventListener('click', () => {
        clearInterval(autoSlide); // Detener el auto slide al hacer clic en los botones
        moveCarousel(button.classList.contains('next') ? 1 : -1);
        autoSlide = setInterval(() => moveCarousel(1), 2000); // Reiniciar auto slide
    });
});
