export function Gallery() {
    const images = [
        "/assets/img/gallery/lesson-photo1.jpg",
        "/assets/img/gallery/lesson-photo2.jpg",
    ];

    const firstClone = `<img src="${images[0]}" alt="Слайд">`;
    const lastClone = `<img src="${images[images.length - 1]}" alt="Слайд">`;
    const imagesHtml = images.map(src => `<img src="${src}" alt="Слайд">`).join('');

    return `
    <section id="gallery" class="reveal">
        <h2 class="title">Життя майстерні</h2>
        <div class="slider-container">
            <div class="slides" id="slider-track">
                ${lastClone}${imagesHtml}${firstClone}
            </div>
            <button class="slider-btn prev" id="prev-slide">❮</button>
            <button class="slider-btn next" id="next-slide">❯</button>
        </div>
    </section>
  `;
}