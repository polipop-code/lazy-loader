import { registerImage } from "./lazyLoader.js";
const reference = document.getElementById("root");

const min = 1;
const max = 123;

const random = () => Math.floor(Math.random() * (max - min)) + min;

const createImageNode = () => {
	// Div - Container
	const container = document.createElement("div");
	container.className = "foxContainer";

	// H2 - Title
	const h2 = document.createElement("h2");
	h2.textContent = "A nuew fox has appear";

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

// Button
const action = () => {
	const newImage = createImageNode();
	reference.appendChild(newImage);
	registerImage(newImage);
};

document.querySelector("button").addEventListener("click", action);
