const nampis = require('../lib/index');

(async () => {
	console.log(await nampis.cat("gif"));
	console.log(await nampis.dog());
	console.log(await nampis.xbox("oi"));
	console.log(await nampis.fox())
})();