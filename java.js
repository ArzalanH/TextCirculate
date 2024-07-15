
let textBox = document.querySelector(".textBox");
let textBoxH1 = textBox.querySelector("h1");
let textArray = textBoxH1.innerHTML.split("");
let rotateValue = 360 / textArray.length;
let rotatedegreevalue = 0;

textBoxH1.innerHTML = "";

textArray.forEach((char, index) => {
    rotatedegreevalue += rotateValue;
    let span = document.createElement("span");
    span.style.transform = `rotate(${rotatedegreevalue}deg)`;
    span.innerHTML = char;
    textBoxH1.appendChild(span);
});

