// accountant
let accountant = 0;

// Intersection observer
const isIntersecting = (entry) => {
	return entry.isIntersecting;
};

const loadImage = (entry) => {
	const node = entry.target;

	console.log("🟣 Imágenes cargadas: " + (accountant + 1));
	accountant += 1;

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
};

export { registerImage };
