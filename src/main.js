const cryp = require("crypto");
const { performance } = require("perf_hooks");


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

function getRandomValues(array) {
	return cryp.randomFillSync(array);
}

function crypto() {}

crypto.getRandomValues = getRandomValues;

module.exports = {
	atob,
	btoa,
	crypto,
	performance
};
