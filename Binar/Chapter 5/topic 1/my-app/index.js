// os is core module
const os = require('os');
const luasSegiTiga = require('./segitiga')
const fs = require('fs')
// console.log('Welcome to the world Binarian');

// console.log('Free Memory :', os.freemem());

// console.log(luasSegiTiga(10,5));
// console.log(luasSegiTiga(3,4));






const value = fs.readFileSync("./text.txt","utf-8")
// console.log(value);

const readValue = fs.readFileSync("./test.txt","utf-8")
const addValue = fs.writeFileSync("./test.txt", readValue + "\nI love binar")
console.log(readValue);

