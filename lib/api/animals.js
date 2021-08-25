/*  Apis coming soon

Duck api: https://random-d.uk/api/quack

*/

const fetch = require('superagent');

let caturl = "https://cataas.com"
let foxurl = 'https://randomfox.ca/floof/'
let dogurl = 'https://dog.ceo/api/breeds/image/random'; // Update to dog coming

async function cat(tp) {
	let type = tp || "jpg"
  
	if (type === "jpg") {
		let url = caturl + "/cat?json=true" 
		const response = await fetch(url);

		return caturl + response.body.url;
	} else if (type === "gif") {
		let url = caturl + "/cat/gif?json=true" 
		const response = await fetch(url);

		return caturl + response.body.url;
	} else {
		return new ReferenceError(`\"${tp}\" isn't a valid reference!`)
	}
}

async function dog() {
	const response = await fetch(dogurl);
	return response.body.message;

}

async function fox() {
	const response = await fetch(foxurl);
	return response.body.link;
} 

module.exports = {
	cat,
	dog,
	fox
};
