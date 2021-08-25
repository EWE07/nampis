const nampis = require('../index.js');

(async () => {
	console.log(await nampis.cat());
	console.log(await nampis.dog());
	console.log(
		await nampis.xbox({
			message: 'oi',
			header: 'Hello'
		})
	);
})();
