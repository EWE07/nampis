const axios = require('axios');

function cat() {
	axios.get('https://thatcopy.pw/catapi/rest/').then(response => {
		console.log(response.data.url);
	});
}

module.exports = {
	cat: cat
};