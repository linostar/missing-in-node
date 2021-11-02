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

function randomAlphaNumeric() {
	let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	return chars.substr(randomInt(chars.length), 1);
}

function randomAlpha() {
	let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
	return chars.substr(randomInt(chars.length), 1);
}

function randomAlphaUpper() {
	let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	return chars.substr(randomInt(chars.length), 1);
}

function randomAlphaLower() {
	let chars = "abcdefghijklmnopqrstuvwxyz";
	return chars.substr(randomInt(chars.length), 1);
}

function randomDigit() {
	let chars = "0123456789";
	return chars.substr(randomInt(chars.length), 1);
}

function randomHexDigit() {
	let chars = "0123456789ABCDEF";
	return chars.substr(randomInt(chars.length), 1);
}

function randomFromList(list) {
	if (!list)
		return undefined;
	return list[randomInt(list.length)];
}

function randomFromObject(object) {
	if (!object)
		return undefined;
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

function bin(num) {
	// convert decimal to binary
	return num.toString(2);
}

function oct(num) {
	// convert decimal to binary
	return num.toString(8);
}

function hex(num) {
	// convert decimal to binary
	return num.toString(16);
}

function dec(str, base) {
	return parseInt(str, base);
}

function factorial(num) {
	let result = 1;
	num = parseInt(num);
	for (let i = 1; i <= num; i++) {
		result *= i;
	}
	return result;
}

function fibonacci(num) {
	// returns the n-th number in fibnoacci series
	num = parseInt(num);
	if (num < 3)
		return 1;
	let tmp;
	let f1 = 1, f2 = 1;
	for (let i = 3; i <= num; i++) {
		tmp = f2;
		f2 = f1 + f2;
		f1 = tmp;
	}
	return f2;
}

function isPrime(num) {
	if (num <= 3)
		return num > 1;
	if (num % 2 == 0 || num % 3 == 0)
		return false;
	for (let i = 5; i * i < num ; i++) {
		if (num % i == 0 || num % (i + 2) == 0)
			return false;
	}
	return true;
}

function startsWith(str, start) {
	return str.substr(0, start.length) === start;
}

function endsWith(str, end) {
	return str.substr(-end.length, end.length) === end;
}

function multiplyString(str, count) {
	if (!Number.isInteger(count))
		throw new TypeError("Argument count must be an integer");
	let out = "";
	for (let i = 0; i < count; i++)
		out += str;
	return out;
}

function listEquals(list1, list2) {
	if (list1.__proto__ === list2.__proto__ && list1.__proto__ === Set.prototype) {
		if (list1.size !== list2.size)
			return false;
		return [...list1].every(x => list2.has(x));
	}
	else if (list1.__proto__ === list2.__proto__ && list1.__proto__ === Array.prototype) {
		if (list1.length !== list2.length)
			return false;
		for (let i = 0; i < list1.length; i++) {
			if (list1[i] !== list2[i] && !isNaN(list1[i]) && !isNaN(list2[i]))
				return false;
		}
		return true;
	}
	else {
		throw new TypeError("The 2 arguments need to be 2 sets or 2 arrays");
	}
}

function shuffle(arr) {
	// Knuth shuffle
	let result = [];
	let currentIndex = arr.length;
	let randomIndex;
	for (let i = 0; i < arr.length; i++)
		result[i] = arr[i];
	while (currentIndex != 0) {
		randomIndex = randomInt(currentIndex)
		currentIndex--;
		[result[randomIndex], result[currentIndex]] = [result[currentIndex], result[randomIndex]];
	}
	return result;
}

function union(set1, set2) {
	return new Set([...set1, ...set2]);
}

function intersection(set1, set2) {
	return new Set([...set1].filter(x => set2.has(x)));
}

function difference(set1, set2) {
	return new Set([...set1].filter(x => !set2.has(x)));
}

function repeatFunction(func, count, argsArray=undefined) {
	if (!Number.isInteger(count))
		throw new TypeError("Argument count must be an integer");
	let results = [];
	if (argsArray) {
		for (let i = 0; i < count; i++) {
			results.push(func(...argsArray));
		}
	}
	else {
		for (let i = 0; i < count; i++) {
			results.push(func());
		}
	}
	return results;
}


module.exports = {
	atob,
	btoa,
	crypto,
	performance,
	randomInt,
	randomFloat,
	randomBool,
	randomAlphaNumeric,
	randomAlpha,
	randomAlphaUpper,
	randomAlphaLower,
	randomDigit,
	randomHexDigit,
	randomFromList,
	randomFromObject,
	chr,
	ord,
	bin,
	oct,
	hex,
	dec,
	factorial,
	fibonacci,
	isPrime,
	startsWith,
	endsWith,
	multiplyString,
	listEquals,
	shuffle,
	union,
	intersection,
	difference,
	repeatFunction,
};
