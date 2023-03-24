const button = document.getElementById("new-fox");
const randomUrl = document.getElementById("random-code");
const randomUrlLink = document.querySelector(".random-url > a");
const foxImage = document.getElementById("random-fox-image");
let cooldown = false;

button.onmousedown = () => {
    if(cooldown) return;

    cooldown = true;

    let [ newFox, newFoxUrl ] = getNewFox();

    randomUrl.innerHTML = newFox;
    randomUrlLink.href = newFoxUrl;

    foxImage.src = newFoxUrl;

    button.style.opacity = 0.33;

    setTimeout(() => {
        cooldown = false; 
        button.style.opacity = 1;

    }, 1333);
}

const randomFromRange = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
}

const types = ["red", "arctic", "fennec"];
const filters = ["", "", "", "-bw", "-one"]

const getNewFox = () => {
    // Wildcard chance
    if(!randomFromRange(0, 10)) {
        num = randomFromRange(0,16)

        return [`https://<span class="n">placefox.it</span>/<span class="x">${num}</span>.jpg`,
                `https://placefox.it/${num}.jpg`]
    }
    const width = 10 * randomFromRange(10, 100);
    const height = 10 * randomFromRange(10, 100);


    const type = types[randomFromRange(0, types.length)];
    const filter = filters[randomFromRange(0, filters.length)];

    return [`https://<span class="n">placefox.it</span>/<span class="w">${width}</span>/<span class="h">${height}</span>/<span class="t">${type}</span><span class="c">${filter}</span>.jpg`,
            `https://placefox.it//${width}/${height}/${type}${filter}.jpg`];
}
