import { registerImage, accountant } from "./lazyLoader.js";
const reference = document.getElementById("root");

let totalFox = document.querySelector("p.totalFox");

const min = 1;
const max = 123;

let wordArray = ["new", "wild", "fluffy", "happy", "lovely"];

const randomWord = () => Math.floor(Math.random() * wordArray.length);

const random = () => Math.floor(Math.random() * (max - min)) + min;

const createImageNode = () => {
    // Div - Container
    const container = document.createElement("div");
    container.className = "foxContainer";

    // H2 - Title
    const h2 = document.createElement("h2");
    h2.textContent = `A ${wordArray[randomWord()]} fox has appear`;

    // Image - Content
    const image = document.createElement("img");
    // image.src = "https://source.unsplash.com/random/?{coffee,cup}";
    image.dataset.src = `https://randomfox.ca/images/${random()}.jpg`;

    // P - Description
    const p = document.createElement("p");
    p.textContent = "Delivery for you, a Fox :D";

    container.append(h2, image, p);
    return container;
};

// Add button
const addImage = () => {
    const newImage = createImageNode();
    reference.appendChild(newImage);
    registerImage(newImage);
    totalFox.innerText = accountant.total;
};

// Limpiar
const removeImage = () => {
    // reference.remove("div.foxContainer");
    while (reference.firstChild) {
        reference.removeChild(reference.firstChild);
    }
    console.clear();
    accountant.loaded = 0;
    accountant.total = 0;
    totalFox.innerText = accountant.total;
};

document.querySelector("button").addEventListener("click", addImage);
document.querySelector("button[class='reset']").addEventListener("click", removeImage);
