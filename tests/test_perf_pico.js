"use strict";
let multiHashing = require('../build/Release/cryptonight-hashing');

const ITER = 1000;
let input = Buffer.from("test");

let start = Date.now();
for (let i = ITER; i; -- i) {
  multiHashing.CRYPTONIGHT_PLEX(input);
}
let end = Date.now();
console.log("Perf: " + 1000 * ITER / (end - start) + " H/s");
