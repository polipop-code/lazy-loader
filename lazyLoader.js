// Intersection observer
const isIntersecting = (entry) => {
	return entry.isIntersecting;
};

const action = () => {
	console.log("Hello!");
};

const observer = new IntersectionObserver((allEntries) => {
	allEntries.filter(isIntersecting).forEach(action);
});

// Lazy Loader
export const registerImage = (image) => {
	observer.observe(image);
}
