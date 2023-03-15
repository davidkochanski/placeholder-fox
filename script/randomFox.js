const button = document.getElementById("new-fox");
const randomUrl = document.getElementById("random-code");
const foxImage = document.getElementById("random-fox-image");

button.onmousedown = () => {
    let [ newFox, newFoxUrl ] = getNewFox();

    randomUrl.innerHTML = newFox;

    // foxImage.src = newFoxUrl;

}

const randomFromRange = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
}

const types = ["red", "arctic", "fennec"];
const filters = ["", "", "", "-bw", "-one"]

const getNewFox = () => {
    if(!randomFromRange(0, 10)) {
        num = randomFromRange(0,16)

        return [`// click me to check out!<br>> https://<span class="n">placefox.com</span>/<span class="x">${num}</span>.jpg`,
                `https://placefox.com/${num}.jpg`]
    }
    const width = 10 * randomFromRange(10, 100);
    const height = 10 * randomFromRange(10, 100);


    const type = types[randomFromRange(0, types.length)];
    const filter = filters[randomFromRange(0, filters.length)];

    return [`// click me to check out!<br>> https://<span class="n">placefox.com</span>/<span class="w">${width}</span>/<span class="h">${height}</span>/<span class="t">${type}</span><span class="c">${filter}</span>.jpg`,
            `https://placefox.com//${width}/${height}/${type}${filter}.jpg`];




}
