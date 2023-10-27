let modeBtn = document.querySelector(".mode");
let body = document.querySelector("body");

modeBtn.addEventListener("click", () => {
    body.classList.toggle("dark");

    if (body.classList.contains("dark")) {
        modeBtn.querySelector("i").className = "fas fa-sun";
    } else {
        modeBtn.querySelector("i").className = "fas fa-moon";
    }
})