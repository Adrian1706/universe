const url = 'https://celestial-objects.p.rapidapi.com/galaxies';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '',
		'X-RapidAPI-Host': ''
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}