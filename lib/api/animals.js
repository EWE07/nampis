const fetch = require('superagent');
// New Cat Api coming soon: https://cataas.com/cat

let caturl = 'https://api.thecatapi.com/v1/images/search';
let dogurl = 'https://dog.ceo/api/breeds/image/random';

async function cat() {
	const res = await fetch(caturl);
	return res.body[0].url;
}

async function dog() {
	const res = await fetch(dogurl);
	return res.body.message;
}

module.exports = {
	cat,
	dog
};