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