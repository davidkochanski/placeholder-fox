const toggle = document.getElementById("darkmode-button");

toggle.onclick = e => {
    document.body.classList.toggle("dark");
    
    const fa = document.querySelector("#darkmode-button i");

    fa.classList.toggle("fa-sun");
    fa.classList.toggle("fa-moon");
}