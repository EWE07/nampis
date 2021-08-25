function xbox(options) {
	if (!options) return new Error('Please lace an object!');

	if (options.message === null || options.message === undefined || options.message === " ") {
		return new ReferenceError('Please place a message!');
	}

	let header = options.header || 'ACHIEVEMENT UNLOCKED!';

	return encodeURI(
		`http://www.achievement-maker.com/xbox/${
			options.message
		}?header=${header}.png`
	);
}

module.exports = {
	xbox
};