document.onmousemove = e => {
    const emptyFox = document.getElementById("empty-fox");

    let x = e.clientX;
    let width = window.innerWidth;

    let percent = 100 * x / width

    emptyFox.style.clipPath = `inset(0 ${100 - percent}% 0 100%)`;
}