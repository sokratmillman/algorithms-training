const fs = require('fs')
let fileContent = fs.readFileSync("input.txt", "utf8");

const [a, b, c, d] = fileContent.toString().split('\n');

a_f = format(a);
b_f = format(b);
c_f = format(c);
d_f = format(d);

console.log((a_f==b_f) ? 'YES' : 'NO');
console.log((a_f==c_f) ? 'YES' : 'NO');
console.log((a_f==d_f) ? 'YES' : 'NO');

function format(stringToFormat) {
  stringToFormat = replaceAll(stringToFormat, "(", "");
  stringToFormat = replaceAll(stringToFormat, ")", "");
  stringToFormat = replaceAll(stringToFormat, "-", "");

  if (stringToFormat.length==7){
    stringToFormat = '+7495'+stringToFormat;
  } else if (stringToFormat.length==11){
    stringToFormat = '+7'+stringToFormat.slice(1);
  }

  return stringToFormat;
}

function replaceAll(string, search, replace) {
  return string.split(search).join(replace);
}
