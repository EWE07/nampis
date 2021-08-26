const fetch = require('superagent');

let caturl = 'https://cataas.com';
let dogurl = 'https://dog.ceo/api/breeds/image/random';

let foxurl = 'https://randomfox.ca/floof/';
let duckurl = 'https://random-d.uk/api/quack';

async function dog() {
	const response = await fetch(dogurl);
	return response.body.message;
}

async function fox() {
	const response = await fetch(foxurl);
	return response.body.image;
}

async function duck() {
	const response = await fetch(duckurl);
	return response.body.url;
}

async function cat(tp) {
	let type = tp || 'jpg';

	if (type === 'jpg') {
		let url = caturl + '/cat?json=true';
		const response = await fetch(url);

		return caturl + response.body.url;
	} else if (type === 'gif') {
		let url = caturl + '/cat/gif?json=true';
		const response = await fetch(url);

		return caturl + response.body.url;
	} else {
		return new ReferenceError(`\"${tp}\" isn't a valid reference!`);
	}
}

module.exports = {
	cat,
	dog,
	fox,
	duck
};
