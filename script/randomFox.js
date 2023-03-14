const button = document.getElementById("new-fox");
const randomUrl = document.getElementById("random-code");

button.onmousedown = () => {
    button.style.backgroundColor = "red";

    randomUrl.innerHTML = getNewFox();

}

const randomFromRange = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
}

const types = ["red", "arctic", "fennec"];
const filters = ["", "", "", "-bw", "-one"]

const getNewFox = () => {
    const width = 10 * randomFromRange(10, 100);
    const height = 10 * randomFromRange(10, 100);

    const type = types[randomFromRange(0, types.length)]
    const filter = filters[randomFromRange(0, filters.length)]

    return `https://randomfox.com/${width}/${height}/${type}${filter}/`;




}
