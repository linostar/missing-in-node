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

describe("Test time functions", function() {
	it("Test performance.now()", function() {
		expect(typeof M.performance.now()).to.be.equal("number", "performance.now() is not a number");
	});

	it("Test sleep()", async function() {
		let t1 = M.performance.now();
		await M.sleep(100);
		let t2 = M.performance.now();

		expect(t2 - t1).to.be.above(90).and.to.be.lessThan(111, "Delay is not correct");
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

	it("Test randomIntWeighted function", function() {
		let arr = [];
		for (let i = 0; i < 1e4; i++)
			arr.push(M.randomIntWeighted(0, 101, 0.7));
		let average = arr.filter(x => x < 70).length / 1e2; 

		expect(average).to.be.above(68).and.to.be.lessThan(72, "average is not within range");
	});

	it("Test randomIntsInRange function", function() {
		let arr = M.randomIntsInRange(100, 200, 5);
		
		expect(arr).to.have.lengthOf(5, "array length is incorrect");
		expect(arr.filter(x => (x >= 100 && x < 200))).to.have.lengthOf(5, "some numbers of array are incorrect");
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

	it("Test randomAlphaNumeric function", function() {
		let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
		let value = M.randomAlphaNumeric();

		expect(chars.includes(value)).to.be.equal(true, "value is not in chars");
	});

	it("Test randomAlpha function", function() {
		let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
		let value = M.randomAlpha();

		expect(chars.includes(value)).to.be.equal(true, "value is not in chars");
	});

	it("Test randomAlphaUpper function", function() {
		let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
		let value = M.randomAlphaUpper();

		expect(chars.includes(value)).to.be.equal(true, "value is not in chars");
	});

	it("Test randomAlphaLower function", function() {
		let chars = "abcdefghijklmnopqrstuvwxyz";
		let value = M.randomAlphaLower();

		expect(chars.includes(value)).to.be.equal(true, "value is not in chars");
	});

	it("Test randomDigit function", function() {
		let chars = "0123456789";
		let value = M.randomDigit();

		expect(chars.includes(value)).to.be.equal(true, "value is not in chars");
	});

	it("Test randomHexDigit function", function() {
		let chars = "0123456789ABCDEFGH";
		let value = M.randomHexDigit();

		expect(chars.includes(value)).to.be.equal(true, "value is not in chars");
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

describe("Test numerical functions", function() {
	it("Test bin function", function() {
		let num = M.bin(70);

		expect(num).to.be.equal("1000110", "num is incorrect");
	});

	it("Test oct function", function() {
		let num = M.oct(70);

		expect(num).to.be.equal("106", "num is incorrect");
	});

	it("Test hex function", function() {
		let num = M.hex(70);

		expect(num).to.be.equal("46", "num is incorrect");
	});

	it("Test dec function", function() {
		let num = M.dec("46", 16);

		expect(num).to.be.equal(70, "num is incorrect");
	});

	it("Test factorial function", function() {
		let num1 = M.factorial(6);
		let num2 = M.factorial(13);

		expect(num1).to.be.equal(720, "num1 is incorrect");
		expect(num2).to.be.equal(6227020800, "num2 is incorrect");
	});

	it("Test fibonacci function", function() {
		let num = M.fibonacci(9);

		expect(num).to.be.equal(34, "num is incorrect");
	});

	it("Test isPrime function", function() {
		let res1 = M.isPrime(7823);
		let res2 = M.isPrime(7825);

		expect(res1).to.be.equal(true, "res1 is incorrect");
		expect(res2).to.be.equal(false, "res2 is incorrect");
	});
});

describe("Test string functions", function() {
	it("Test startsWith function", function() {
		let res1 = M.startsWith("Hello World!", "hello");
		let res2 = M.startsWith("Hello World!", "Hello");

		expect(res1).to.be.equal(false, "res1 is incorrect");
		expect(res2).to.be.equal(true, "res2 is incorrect");
	});

	it("Test endsWith function", function() {
		let res1 = M.endsWith("Hello World!", "ld");
		let res2 = M.endsWith("Hello World!", "orld!");

		expect(res1).to.be.equal(false, "res1 is incorrect");
		expect(res2).to.be.equal(true, "res2 is incorrect");
	});

	it("Test multiplyString function", function() {
		let res = M.multiplyString("abc", 3)

		expect(res).to.be.equal("abcabcabc", "res is incorrect");
	});
});

describe("Test array functions", function() {

	it("Test reverse function", function() {
		let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
		let arr2 = M.reverse(arr);

		expect(arr2).to.have.lengthOf(arr.length, "length of resulting array is incorrect");
		expect(arr2.toString()).to.be.equal("9,8,7,6,5,4,3,2,1,0", "array values are incorrect");
	});

	it("Test shuffle function", function() {
		let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
		let arr2 = M.shuffle(arr);

		expect(arr2).to.have.lengthOf(arr.length, "length of resulting array is incorrect");
		expect(arr2.sort().toString()).to.be.equal(arr.toString(), "array values are incorrect");
	});
});

describe("Test set functions", function() {
	it("Test union function", function() {
		let set1 = new Set([1, 4, 7, 10]);
		let set2 = new Set([1, 3, 5, 7, 9]);
		let expectedResult = new Set([1, 3, 4, 5, 7, 9, 10]);
		let setUnion = M.union(set1, set2);

		expect(M.listEquals(setUnion, expectedResult)).to.be.equal(true, "sets are not equal");
	});

	it("Test intersection function", function() {
		let set1 = new Set([1, 4, 7, 10]);
		let set2 = new Set([1, 3, 5, 7, 9]);
		let expectedResult = new Set([1, 7]);
		let setIntersect = M.intersection(set1, set2);

		expect(M.listEquals(setIntersect, expectedResult)).to.be.equal(true, "sets are not equal");
	});

	it("Test difference function", function() {
		let set1 = new Set([1, 4, 7, 10]);
		let set2 = new Set([1, 3, 5, 7, 9]);
		let expectedResult = new Set([4, 10]);
		let setDifference = M.difference(set1, set2);

		expect(M.listEquals(setDifference, expectedResult)).to.be.equal(true, "sets are not equal");
	});
});

describe("Test function-related functions", function() {
	it("Test repeatFunction function", function() {
		let func = (x) => x * 2;
		let ret = M.repeatFunction(func, 3, [4]);
		let expectedResult = [8, 8, 8]

		expect(M.listEquals(ret, expectedResult)).to.be.equal(true, "arrays are not equal");
	});

	it("Test multiFunction function", function() {
		let square = (x) => x ** 2;
		let cube = (x) => x ** 3;
		let ret = M.multiFunction(2, [square, cube, square]);

		expect(ret).to.be.equal(4096, "value is incorrect");
	});
});
