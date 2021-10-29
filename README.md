# missing-in-node

![Build](https://github.com/linostar/missing-in-node/actions/workflows/main.yml/badge.svg)

Javascript functions needed repeatedly but missing in Node.

## How to install and use

Run `npm install missing-in-node` or `yarn add missing-in-node`.

You can then use the module in your project as the example below illustrates:

```
const M = require("missing-in-node");

console.log(M.btoa("Encode this string")); // outputs: RW5jb2RlIHRoaXMgc3RyaW5n
```


## Functions provided in this package

### String functions
- `atob(input: string) : string` decodes a Base64 string
- `btoa(input: string) : string` encodes into a Base64 string
- `chr(num: int) : string` an alias for String.fromCharCode
- `ord(char: string) : int` an alias for String.prototype.charCodeAt
- `startsWith(text: string, start: string) : bool` returns true only if the first arg starts with the second arg
- `endsWith(text: string, end: string) : bool` returns true only if the first arg ends with the second arg

### Time functions
- `performance.now() : float` returns the milliseconds that passed since the process started

### Random functions
- `randomInt(n1: int, n2: int) : int` fast but cryptographically insecure function that returns an integer between 0 and (n1 - 1) if only n1 is provided, otherwise an integer between n1 and (n2 - 1)
- `randomFloat(n1: float, n2: float) : float` returns a float between 0 and n1 if only n1 is provided, otherwise a float between n1 and n2
- `randomBool() : bool` returns true or false randomly
- `randomAlphaNumeric() : string` returns a random alphanumeric character (from A-Z or a-z or 0-9)
- `randomAlpha() : string` returns a random alpha character (from A-Z or a-z)
- `randomAlphaUpper() : string` returns a random uppercase alpha character (from A-Z)
- `randomAlphaLower() : string` returns a random lowercase alpha character (from a-z)
- `randomDigit() : string` returns a random decimal digit character (from 0-9)
- `randomHexDigit() : string` returns a random hexadecimal digit character (from 0-9 or A-F)
- `randomFromList(list: array) : any` returns a random element from list
- `randomFromObject(obj: object): object` returns a random key-value pair from an object
- `crypto.randomInt(n1: int, n2: int) : int` cryptograhically secure random integer generator
- `crypto.getRandomValues(array) : array` fills an array with random values likes its browser counterpart

### Numerical functions
- `bin(num: int) : string` an alias for .toString(2)
- `oct(num: int) : string` an alias for .toString(8)
- `hex(num: int) : string` an alias for .toString(16)
- `dec(num: string, base: int) : int` an alias for parseInt(num, base)
- `factorial(num: int) : int` calculates the factorial of a positive integer
- `fibonacci(num: int) : int` calculates the n-th number in fibonacci series using non-recursive method
- `isPrime(num: int) : bool` determines whether an integer is prime or not

### List functions
- `listEquals(list1, list2) : bool` determines if two arrays or two sets are equal (for primitive type elements only)
- `shuffle(arr: array) : array` returns a shuffled array (using Knuth method) without modifying the original one
- `union(set1: set, set2: set) : set` returns the union of two sets
- `intersection(set1: set, set2: set) : set` returns the intersection of two sets
- `difference(set1: set, set2: set) : set` returns the difference of two sets
