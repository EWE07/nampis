const nampis = require('../lib/index');

(async () => {
	console.log(await nampis.cat());
	console.log(await nampis.dog());
	console.log(nampis.xbox({
			message: 'hello',
			header: 'Hello'
		})
	);
})();
