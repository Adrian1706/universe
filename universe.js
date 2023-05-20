const url = 'https://celestial-objects.p.rapidapi.com/galaxies';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '4d3abdd95amsh42b11a056be5dccp19703cjsn96a51d54275a',
		'X-RapidAPI-Host': 'celestial-objects.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}