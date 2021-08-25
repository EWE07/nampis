const fetch = require('superagent');

let caturl = 'https://api.thecatapi.com/v1/images/search';
let dogurl = 'https://dog.ceo/api/breeds/image/random';

function cat() {
	return fetch(caturl).then(res => {
		return res.body[0].url;
	});
}

function dog() {
	return fetch(dogurl).then(res => {
		return res.body.message;
	});
}

module.exports = {
	cat,
	dog
};
