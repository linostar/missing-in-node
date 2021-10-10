const mocha = require("mocha");
const { expect } = require("chai");
const M = require("../src/main.js");


describe("Test atob function", function() {
	it("Test empty input", function() {
		let output = M.atob("");

		expect(output).to.be.equal("", "Output is not empty string");
	});

	it("Test encoded hello-world input", function() {
		let output = M.atob("SGVsbG8gV29ybGQh");
		
		expect(output).to.be.equal("Hello World!", "Output is not correct");
	});

	it("Test binary output", function() {
		let binary = [110, 38, 56, 100, 65].map(x => String.fromCharCode(x)).join("");
		let output = M.atob("biY4ZEE=");
		
		expect(output).to.be.equal(binary, "Output is not correct");
	});
});

describe("Test btoa function", function() {
	it("Test empty input", function() {
		let output = M.btoa("");

		expect(output).to.be.equal("", "Output is not empty string");
	});

	it("Test hello-world input", function() {
		let output = M.btoa("Hello World!");
		
		expect(output).to.be.equal("SGVsbG8gV29ybGQh", "Output is not correct");
	});

	it("Test binary input", function() {
		let binary = [110, 38, 56, 100, 65].map(x => String.fromCharCode(x)).join("");
		let output = M.btoa(binary);
		
		expect(output).to.be.equal("biY4ZEE=", "Output is not correct");
	});
});

describe("Test performance functions", function() {
	it("Test performance.now()", function() {
		expect(typeof M.performance.now()).to.be.equal("number", "performance.now() is not a number");
	});
});

describe("Test crypto functions", function() {
	it("Test crypto.getRandomValues()", function() {
		let array = new Uint8Array(2);
		M.crypto.getRandomValues(array);

		expect(array[0]).to.be.lessThan(256).and.to.be.above(-1, "crypto.getRandomValues did not return correct random numbers");
	});
});

describe("Test the random functions", function() {
	it("Test randomInt function", function() {
		let number1 = M.randomInt(100);
		let number2 = M.randomInt(100, 200);

		expect(number1).to.be.above(-1).and.to.be.lessThan(100, "number1 is incorrect");
		expect(number2).to.be.above(99).and.to.be.lessThan(200, "number2 is incorrect");
	});

	it("Test randomFloat function", function() {
		let number1 = M.randomFloat(100);
		let number2 = M.randomFloat(100, 200);

		expect(number1).to.be.above(-1).and.to.be.lessThan(100, "number1 is incorrect");
		expect(number2).to.be.above(99).and.to.be.lessThan(200, "number2 is incorrect");
	});

	it("Test randomBool function", function() {
		let value = M.randomBool();

		expect(typeof value).to.be.equal("boolean", "value is not bool");
	});

	it("Test randomFromArray function", function() {
		let list = [123, "hello", -1.1234, false, "world"];
		let value = M.randomFromList(list);

		expect(list).to.include(value, "value is not in list");
	});

	it("Test randomFromObject function", function() {
		let object = { "a": 1, "b": 2, "c": 3 };
		let entry = M.randomFromObject(object);
		let key = Object.keys(entry)[0];

		expect(object[key]).to.be.equal(entry[key], "entry is not in object");
	});
});

describe("Test character functions", function() {
	it("Test chr function", function() {
		let char = M.chr(65);

		expect(char).to.be.equal("A", "char is incorrect");
	});

	it("Test ord function", function() {
		let number = M.ord("A");

		expect(number).to.be.equal(65, "number is incorrect");
	});
});
