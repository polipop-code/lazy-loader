let sightedFox = document.querySelector("p.sightedFox");

// accountant.loaded
let accountant = {
	total: 0,
	loaded: 0,
};
// let accountant.loaded = 0;
// let accountant.total = 0;

// Intersection observer
const isIntersecting = (entry) => {
	return entry.isIntersecting;
};

const loadImage = (entry) => {
	const node = entry.target;

	console.log("🟣 Imágenes cargadas: " + (accountant.loaded + 1) + " de " + accountant.total);
	accountant.loaded += 1;
	sightedFox.innerText = accountant.loaded;

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
	console.log("⚪ Total de Imágenes: " + (accountant.total + 1));
	accountant.total += 1;
};

export { registerImage, accountant };
