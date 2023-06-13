const hamburguer = document.getElementById("hamburguer");

hamburguer.addEventListener("click", () => {
    document.getElementById("menu-mobile").classList.toggle("active");
})


const galleryWrapper = document.querySelector('.galeria-wrapper');

let isDragging = false;
let startX;
let scrollLeft;

galleryWrapper.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.pageX - galleryWrapper.offsetLeft;
    scrollLeft = galleryWrapper.scrollLeft;
});

galleryWrapper.addEventListener('mouseleave', () => {
    isDragging = false;
});

galleryWrapper.addEventListener('mouseup', () => {
    isDragging = false;
});

galleryWrapper.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - galleryWrapper.offsetLeft;
    const walk = (x - startX) * 1; // Ajuste a sensibilidade da rolagem aqui
    galleryWrapper.scrollLeft = scrollLeft - walk;
});