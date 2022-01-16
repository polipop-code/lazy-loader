// loadAccountant
let loadAccountant = 0;
let totalAccountant = 0;

// Intersection observer
const isIntersecting = (entry) => {
	return entry.isIntersecting;
};

const loadImage = (entry) => {
	const node = entry.target;

	console.log("🟣 Imágenes cargadas: " + (loadAccountant + 1) + " de " + totalAccountant);
	loadAccountant += 1;

	const image = node.querySelector("img");

	const url = image.dataset.src;
	image.src = url;
	observer.unobserve(node);
};

const observer = new IntersectionObserver((allEntries) => {
	allEntries.filter(isIntersecting).forEach(loadImage);
});

// Lazy Loader
const registerImage = (image) => {
	observer.observe(image);
	console.log("⚪ Total de Imágenes: " + (totalAccountant + 1));
	totalAccountant += 1;
};

export { registerImage };
