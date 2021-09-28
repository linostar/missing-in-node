# missing-in-node

Javascript functions needed repeatedly but missing in Node.

## How to install and use

Run `npm install missing-in-node` or `yarn add missing-in-node`.

You can then use the module in your project as the example below illustrates:

```
const M = require("missing-in-node");

console.log(M.btoa("Encode this string")); // outputs: RW5jb2RlIHRoaXMgc3RyaW5n
```


## Functions provided in this package

- atob(input: string) : string ---> decodes a Base64 string
- btoa(input: string) : string ---> encodes into a Base64 string
- crypto.getRandomValues(array) : array ---> fills an array with random values likes its browser counterpart
- performance.now() : float ---> returns the milliseconds that passed since the process started
- randomInt(n1: int, n2: int) : int ---> returns an integer between 0 and (n1 - 1) if only n1 is provided, otherwise an integer between n1 and (n2 - 1)
- randomFloat(n1: float, n2: float) : float ---> returns a float between 0 and n1 if only n1 is provided, otherwise a float between n1 and n2
- randomBool() : bool ---> returns true or false randomly
- randomFromList(list: array) : any ---> returns a random element from list
- randomFromObject(obj: object): object ---> returns a random key-value pair from an object
