const path = require('path');

const filepath = '/asf/bb.jpg';
const myExt = path.extname(filepath);
const myBase = path.basename(filepath, myExt);

console.log(filepath);
console.log(myBase);
console.log(myExt);