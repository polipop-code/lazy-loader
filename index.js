import { registerImage, accountant } from "./lazyLoader.js";
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

// Add button
const addImage = () => {
	const newImage = createImageNode();
	reference.appendChild(newImage);
	registerImage(newImage);
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
};

document.querySelector("button").addEventListener("click", addImage);
document.querySelector("button[class='reset']").addEventListener("click", removeImage);
