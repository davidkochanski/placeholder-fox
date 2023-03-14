document.onmousemove = e => {
    const emptyFox = document.getElementById("empty-fox");
    const emptyHeader = document.querySelector(".hero .hero-content.empty-content");
    const fullHeader = document.querySelector(".hero .hero-content.full-content");

    let x = e.clientX;
    let width = window.innerWidth;

    let percent = 100 * x / width

    emptyFox.style.clipPath = `inset(0 ${100 - percent}% 0 100%)`;
    fullHeader.style.clipPath = `inset(0 100% 0 ${percent}% )`;
    emptyHeader.style.clipPath = `inset(0 ${100 -percent}% 0 100%)`;
}