document.addEventListener("DOMContentLoaded", function () {
    // Seznam obrázků
    const images = [
        "../fotky/portfolio/1.jpg",
        "../fotky/portfolio/2.jpg",
        "../fotky/portfolio/3.jpg",
        "../fotky/portfolio/4.jpg",
        "../fotky/portfolio/5.jpg",
        "../fotky/portfolio/6.jpg",
        "../fotky/portfolio/7.jpg",
        "../fotky/portfolio/8.jpg"
    ];

    const gallery = document.getElementById('gallery');
    images.forEach((src, idx) => {
        const img = document.createElement('img');
        img.src = src;
        img.alt = `Foto ${idx+1}`;
        img.dataset.index = idx;
        gallery.appendChild(img);
    });

    // Lightbox funkce
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.querySelector('.lightbox-img');
    const closeBtn = document.querySelector('.lightbox .close');
    const prevBtn = document.querySelector('.lightbox .prev');
    const nextBtn = document.querySelector('.lightbox .next');
    let currentIndex = 0;

    function showLightbox(index) {
        currentIndex = index;
        lightboxImg.src = images[currentIndex];
        lightbox.style.display = "flex";
    }

    gallery.addEventListener('click', function(e) {
        if (e.target.tagName === 'IMG') {
            showLightbox(Number(e.target.dataset.index));
        }
    });

    closeBtn.onclick = () => lightbox.style.display = "none";
    prevBtn.onclick = () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        lightboxImg.src = images[currentIndex];
    };
    nextBtn.onclick = () => {
        currentIndex = (currentIndex + 1) % images.length;
        lightboxImg.src = images[currentIndex];
    };

    // Zavření lightboxu klávesou ESC
    document.addEventListener('keydown', function(e) {
        if (lightbox.style.display === "flex") {
            if (e.key === "Escape") lightbox.style.display = "none";
            if (e.key === "ArrowLeft") prevBtn.onclick();
            if (e.key === "ArrowRight") nextBtn.onclick();
        }
    });
});