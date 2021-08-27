const fetch = require('superagent');

let mine = 'https://api.mcsrvstat.us/2/';
let minebedrock = 'https://api.mcsrvstat.us/bedrock/2/';

function xbox(message, header) {
	let hdr = header || 'ACHIEVEMENT UNLOCKED!';
	if (message === null || message === undefined || message === ' ') {
		return new ReferenceError('Please place a message!');
	}

	return encodeURI(
		`http://www.achievement-maker.com/xbox/${message}?header=${hdr}.png`
	);
}

async function minecraft(ip, type, op) {
	if (type === 'java') {
		let response = await fetch(mine + ip);
		let info = response.body;

		if (info.debug.ping === false) return '404';
		switch (op.toLowerCase()) {
			case 'hostname':
				return info.hostname;
			case 'ip':
				return info.ip;
			case 'version':
				return info.version;
			case 'protocol':
				return info.protocol;
			case 'port':
				return info.port;
			case 'players':
				return info.players.online;
			case 'players-max':
				return info.players.max;
			default:
				return '2404';
		}
	} else if (type === 'bedrock') {
		let response = await fetch(minebedrock + ip);
		let info = response.body;

		if (info.debug.ping === false) return '404';
		switch (op.toLowerCase()) {
			case 'hostname':
				return info.hostname;
			case 'ip':
				return info.ip;
			case 'version':
				return info.version;
			case 'protocol':
				return info.protocol;
			case 'port':
				return info.port;
			case 'players':
				return info.players.online;
			case 'players-max':
				return info.players.max;
			default:
				return '2404';
		}
	}
}

module.exports = {
	xbox,
	minecraft
};
