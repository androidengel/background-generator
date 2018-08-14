var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector("button");

body.style.background = "linear-gradient(to right, " + 
color1.value + ", " + 
color2.value + ")";

css.textContent = body.style.background;

color1.addEventListener("input", updateColor);

color2.addEventListener("input", updateColor);

button.addEventListener("click", randGradient);

function updateColor() {
    body.style.background = "linear-gradient(to right, " + 
        color1.value + ", " + 
        color2.value + ")";

    css.textContent = body.style.background + ";";
}

function randGradient() {
    body.style.background = "linear-gradient(to right, " +
        getRGBText() + ", " + 
        getRGBText() + ")";
}

function getRGBText() {
    return "rgb(" + getRandColor() + ", "
    + getRandColor() + ", "
    + getRandColor() + ")";
}

function getRandColor() {
    return Math.floor(Math.random() * 256);
}