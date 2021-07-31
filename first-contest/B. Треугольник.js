const fs = require('fs')
let fileContent = fs.readFileSync("input.txt", "utf8");

const [a, b, c] = fileContent.toString().split('\n');

if (Number(a)+Number(b)>Number(c) &&
    Number(c)+Number(b)>Number(a) &&
    Number(a)+Number(c)>Number(b)) {
     console.log('YES');
} else {
  console.log('NO');
}
