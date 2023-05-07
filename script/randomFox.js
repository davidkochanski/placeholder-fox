const button = document.getElementById("new-fox");
const randomUrl = document.getElementById("random-code");
const randomUrlLink = document.querySelector(".random-url > a");
const foxImage = document.getElementById("random-fox-image");
const dice = document.querySelector("#new-fox .fa-dice-five");
let cooldown = false;

const types = ["red", "arctic", "fennec"];
const filters = ["", "", "", "-bw"]

let [ newFox, newFoxUrl, newFoxPath ] = getNewFox();

randomUrl.innerHTML = newFox;
randomUrlLink.href = newFoxUrl;
foxImage.src = newFoxPath;

button.onmousedown = () => {
    if(cooldown) return;

    cooldown = true;

    let [ newFox, newFoxUrl, newFoxPath ] = getNewFox();

    randomUrl.innerHTML = newFox;
    randomUrlLink.href = newFoxUrl;
    foxImage.src = newFoxPath;

    button.style.opacity = 0.33;

    dice.style.transition = "rotate 1s ease";
    dice.style.rotate = "360deg";

    setTimeout(() => {
        cooldown = false; 
        button.style.opacity = 1;

        dice.style.transition = "";
        dice.style.rotate = "0deg";

    }, 1500);
}

function randomFromRange(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function getNewFox() {
    // Wildcard chance
    if(!randomFromRange(0, 10)) {
        num = randomFromRange(0,16);

        return [`https://<span class="n">placefox.xyz</span>/<span class="x">${num}</span>.jpg`,
                `https://placefox.xyz/${num}.jpg`,
                `${num}.jpg`]
    }
    const width = 25 * randomFromRange(10, 40);
    const height = 25 * randomFromRange(10, 40);


    const type = types[randomFromRange(0, types.length)];
    const filter = filters[randomFromRange(0, filters.length)];

    return [`https://<span class="n">placefox.xyz</span>/<span class="w">${width}</span>/<span class="h">${height}</span>/<span class="t">${type}</span><span class="c">${filter}</span>.jpg`,
            `https://placefox.xyz//${width}/${height}/${type}${filter}.jpg`,
            `${width}/${height}/${type}${filter}.jpg`];
}
