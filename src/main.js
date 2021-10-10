const cryp = require("crypto");
const { performance } = require("perf_hooks");


function crypto() {}

crypto.getRandomValues = getRandomValues;


function getRandomValues(array) {
	return cryp.randomFillSync(array);
}

function atob(input) {
	// returns Base64 decoding of input
	return Buffer.from(input, "base64").toString("binary");
}

function btoa(input) {
	// returns Base64 encoding of input
	// if (typeof input == "object")
	// 	return input.toString("base64");
	return Buffer.from(input).toString("base64");
}

function randomInt(n1, n2) {
	// returns a random integer between n1 and (n2 - 1) if n1 and n2 are provided
	// or returns a random integer between 0 and (n1 - 1) if only n1 is provided
	if (n2 !== undefined) {
		return Math.floor(n1 + (n2 - n1) * Math.random());
	}
	else if (n1 !== undefined) {
		return Math.floor(n1 * Math.random());
	}
	else {
		throw new TypeError("1 or 2 arguments are required");
	}
}

function randomFloat(n1, n2) {
	// returns a random float between n1 and n2 exclusive if n1 and n2 are provided
	// or returns a random float between 0 and n1 exclusive if only n1 is provided
	if (n2 !== undefined) {
		return n1 + (n2 - n1) * Math.random();
	}
	else if (n1 !== undefined) {
		return n1 * Math.random();
	}
	else {
		throw new TypeError("1 or 2 arguments are required");
	}
}

function randomBool() {
	// returns random true or false
	return Math.floor(Math.random() * 2) ? true : false;
}

function randomFromList(list) {
	return list[randomInt(list.length)];
}

function randomFromObject(object) {
	let key = randomFromList(Object.keys(object));
	let out = {};
	out[key] = object[key];
	return out;
}

function chr(number) {
	return String.fromCharCode(number);
}

function ord(char) {
	return char.charCodeAt();
}


module.exports = {
	atob,
	btoa,
	crypto,
	performance,
	randomInt,
	randomFloat,
	randomBool,
	randomFromList,
	randomFromObject,
	chr,
	ord,
};
