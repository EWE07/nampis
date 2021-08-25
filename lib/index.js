let dir = './api/';

module.exports = {
	cat: require(dir + 'animals').cat,
	dog: require(dir + 'animals').dog,
	xbox: require(dir + 'fun').xbox
};
