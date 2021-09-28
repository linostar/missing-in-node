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

- atob(str) -> str :: decodes a Base64 string
- btoa(str) -> str :: encodes into a Base64 string
- crypto.getRandomValues(array) -> array :: fills an array with random values likes its browser counterpart
- performance.now() -> float :: returns the milliseconds that passed since the process started
