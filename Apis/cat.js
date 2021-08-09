const fetch = require('superagent');

async function cat() {
	return fetch('https://thatcopy.pw/catapi/rest').then(res => {
		let a = res;
		return a.body.url;
	});
}

module.exports = { 
	getCat: cat
};
