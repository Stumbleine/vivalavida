export const shuffleArray = array => {
	let currentIndex = array.length;
	let randomIndex;

	while (currentIndex != 0) {
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex--;
		[array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
	}
	return array;
};
export const shuffleES6 = array => {
	array.reverse().forEach((item, index) => {
		const j = Math.floor(Math.random() * (index + 1));
		[array[index], array[j]] = [array[j], array[index]];
	});

	return array;
};

export const shufleArray = array => {
	console.log(array);
	//return array.sort(() => Math.random() - 0.5);
};
