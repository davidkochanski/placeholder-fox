const width = document.querySelector("#example-code span.w");
const height = document.querySelector("#example-code span.h");
const type = document.querySelector("#example-code span.t");
const filter = document.querySelector("#example-code span.c");
const wild = document.querySelector("#example-code span.x");

const defaultExample = document.querySelector("#example-code p.trunc:nth-of-type(2)");
const wildExample = document.querySelector("#example-code p.trunc:nth-of-type(3)");

const dimensionsCard = document.querySelector(".guide-array .guide-card:first-of-type");
const typeCard = document.querySelector(".guide-array .guide-card:nth-of-type(2)");
const filterCard = document.querySelector(".guide-array .guide-card:nth-of-type(3)");
const wildCard = document.querySelector(".guide-array .guide-card:last-of-type");

dimensionsCard.onmouseenter = () => {
    width.style.color = "white"
    width.style.textShadow = "0 0 8px #fea735, 0 0 8px #fea735, 0 0 8px #fea735, 0 0 8px #fea735"

    height.style.color = "white"
    height.style.textShadow = "0 0 8px #fe7235, 0 0 8px #fe7235, 0 0 8px #fe7235, 0 0 8px #fe7235"
}

dimensionsCard.onmouseleave = () => {
    width.style.color = "#fea735"
    width.style.textShadow = "";

    height.style.color = "#fe7235"
    height.style.textShadow = "";
}

typeCard.onmouseenter = () => {
    type.style.color = "white";
    type.style.textShadow = "0 0 8px #94eac6, 0 0 8px #94eac6, 0 0 8px #94eac6, 0 0 8px #94eac6"
}

typeCard.onmouseleave = () => {
    type.style.color = "#94eac6";
    type.style.textShadow = "";
}

filterCard.onmouseenter = () => {
    filter.style.color = "white";
    filter.style.textShadow = "0 0 8px #00c3ff, 0 0 8px #00c3ff, 0 0 8px #00c3ff, 0 0 8px #00c3ff"
}

filterCard.onmouseleave = () => {
    filter.style.color = "#00c3ff";
    filter.style.textShadow = "";
}


wildCard.onmouseenter = () => {
    defaultExample.style.display = "none";
    wildExample.style.display = "block";

    wild.style.color = "white";
    wild.style.textShadow = "0 0 8px hotpink, 0 0 8px hotpink, 0 0 8px hotpink, 0 0 8px hotpink"
}

wildCard.onmouseleave = () => {
    defaultExample.style.display = "block";
    wildExample.style.display = "none";
}

