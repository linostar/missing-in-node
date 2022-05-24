# missing-in-node

![Build](https://github.com/linostar/missing-in-node/actions/workflows/main.yml/badge.svg)

Javascript functions that are needed repeatedly but are missing in NodeJS.

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
- `reverse(input: string) : string` returns the reversed string without modifying the original one
- `startsWith(text: string, start: string) : bool` returns true only if the first arg starts with the second arg
- `endsWith(text: string, end: string) : bool` returns true only if the first arg ends with the second arg
- `occurences(haystack: string, needle: string) : int` returns number of occurences of a string in another string
- `multiplyString(str: string, count: int) : string` returns he original string repeated count times

### Time functions
- `performance.now() : float` returns the milliseconds that passed since the process started
- `sleep(milliseconds)` asynchronous function that sleeps the number of milliseconds provided in its argument

### Random functions
- `randomInt(n1: int, n2: int) : int` fast but cryptographically insecure function that returns an integer between 0 and (n1 - 1) if only n1 is provided, otherwise an integer between n1 and (n2 - 1)
- `randomIntWeighted(n1: int, n2: int, weight: float) : int` same as ramdomInt but with weight parameter (between 0 and 1) that makes the random distribution leans towards n1 or n2
- `randomIntsInRange(n1 : int, n2: int, count: int) : array` returns an array with count numbers of sorted random integers between n1 and (n2 - 1)
- `randomFloat(n1: float, n2: float) : float` returns a float between 0 and n1 if only n1 is provided, otherwise a float between n1 and n2
- `randomBool() : bool` returns true or false randomly
- `randomAlphaNumeric() : string` returns a random alphanumeric character (from A-Z or a-z or 0-9)
- `randomAlpha() : string` returns a random alpha character (from A-Z or a-z)
- `randomAlphaUpper() : string` returns a random uppercase alpha character (from A-Z)
- `randomAlphaLower() : string` returns a random lowercase alpha character (from a-z)
- `randomDigit() : string` returns a random decimal digit character (from 0-9)
- `randomHexDigit() : string` returns a random hexadecimal digit character (from 0-9 or A-F)
- `randomFromList(list: array) : any` returns a random element from list
- `randomWithPercentage(obj: object): any` returns a random key from an object with format `{"option1": percentage1, "option2": percentage2, ...}`
- `randomFromObject(obj: object): object` returns a random key-value pair from an object
- `crypto.randomInt(n1: int, n2: int) : int` cryptograhically secure random integer generator
- `crypto.getRandomValues(array) : array` fills an array with random values similarly to its browser counterpart

### Numerical functions
- `bin(num: int) : string` an alias for .toString(2)
- `oct(num: int) : string` an alias for .toString(8)
- `hex(num: int) : string` an alias for .toString(16)
- `dec(num: string, base: int) : int` an alias for parseInt(num, base)
- `round(number: float or string, decimalDigits: int) : float` rounds a number to a particular number of decimal digits
- `reverse(input: number) : number` returns the reversed number without modifying the original one
- `factorial(num: int) : int` calculates the factorial of a positive integer
- `fibonacci(num: int) : int` calculates the n-th number in fibonacci series using non-recursive method
- `isPrime(num: int) : bool` determines whether an integer is prime or not

### List functions
- `listEquals(list1, list2) : bool` determines if two arrays or two sets are equal (for primitive type elements only)
- `objectEquals(object1, object2) : bool` determines if two objects or are equal (for primitive type values only)
- `reverse(input: array) : array` returns a reversed array without modifying the original one
- `shuffle(arr: array) : array` returns a shuffled array (using Knuth method) without modifying the original one
- `union(set1: set, set2: set) : set` returns the union of two sets
- `intersection(set1: set, set2: set) : set` returns the intersection of two sets
- `difference(set1: set, set2: set) : set` returns the difference of two sets
- `clone(obj: any) : any` returns a shallow copy of an object or an array

### function-related functions
- `repeatFunction(func: function, count: int, argsArray: array) : array` executes a function count times and returns the function return values in an array
- `multiFunction(arg: any, funcArray: array, classObj: object) : any`  applies the functions in funcArray in order on the argument arg; elements in funcArray must be either funciton objects if classObj is not supplied, or strings that represent methods of classObj otherwise
- `runSequential(funcArray: array) : array` executes functions in funcArray sequentially; each element in the array is an object in the form { func: funcObj, args: [] }; the return values are returned in the same order in an array
- `runConcurrent(funcArray: array) : array` executes functions in funcArray concurrently; each element in the array is an object in the form { func: funcObj, args: [] }; the return values are returned in the same order in an array
- `benchmark(func: function, count: int, argsArray: array)` executes a function count times and prints the to stdout the total execution time
