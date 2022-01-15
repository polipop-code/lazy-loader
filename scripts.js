const reference = document.getElementById("root");

const min = 1;
const max = 123;

const random = () => Math.floor(Math.random() * (max - min)) + min;

let createImageNode = () => {
	// Div
	let div = document.createElement("div");
	div.className = "foxContainer";

	// H2
	let h2 = document.createElement("h2");
	h2.textContent = "A nuew fox has appear";

	// Image
	let image = document.createElement("img");
	// image.src = "https://source.unsplash.com/random/?{coffee,cup}";
	image.src = `https://randomfox.ca/images/${random()}.jpg`;

	// P
	let p = document.createElement("p");
	p.textContent = "Delivery for you, a Fox :D";

	div.append(h2, image, p);
	return div;
};

// Button
let action = () => {
	newImage = createImageNode();
	reference.appendChild(newImage);
};

document.querySelector("button").addEventListener("click", action);
