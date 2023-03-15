const button = document.getElementById("new-fox");
const randomUrl = document.getElementById("random-code");
const foxImage = document.getElementById("random-fox-image");

button.onmousedown = () => {
    newFox = getNewFox();

    randomUrl.innerHTML = newFox;

    // foxImage.src = newFox;

}

const randomFromRange = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
}

const types = ["red", "arctic", "fennec"];
const filters = ["", "", "", "-bw", "-one"]

const getNewFox = () => {
    if(!randomFromRange(0, 10)) {
        return `https://<span class="n">placefox.com</span>/<span class="x">${randomFromRange(0,16)}</span>/`
    }

    const width = `<span class="w">${10 * randomFromRange(10, 100)}</span>`;
    const height = `<span class="h">${10 * randomFromRange(10, 100)}</span>`;


    const type = `<span class="t">${types[randomFromRange(0, types.length)]}</span>`;
    const filter = `<span class="c">${filters[randomFromRange(0, filters.length)]}</span>`;

    return `https://<span class="n">placefox.com</span>/${width}/${height}/${type}${filter}/`;




}
