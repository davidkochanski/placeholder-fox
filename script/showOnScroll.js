const toObserve = ["fox-img", "top-code-type"]
// The class added that shows and animates the element
// should be the same as it's id with "show-" prepended

const myObserver = new IntersectionObserver((e) => {
    e.forEach((element) => {
        if(element.isIntersecting) {
            element.target.classList.add(`show-${element.target.id}`);
        }
    })
})

toObserve.forEach((el) => myObserver.observe(document.getElementById(el)))