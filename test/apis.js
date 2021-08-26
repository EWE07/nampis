const nampis = require('../lib/index');

(async () => {
	console.log(await nampis.cat());
	console.log(await nampis.dog());
	console.log(await nampis.fox());
	console.log(await nampis.duck());

	console.log(nampis.xbox('Hey!'));
})();
