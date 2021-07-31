const fs = require('fs')
let fileContent = fs.readFileSync("input.txt", "utf8");

const [firstline, secondline] = fileContent.toString().split('\n');

const [t_room, t_cond] = firstline.toString().split(' ');

if (secondline == 'auto') {
  console.log(t_cond);
} else if (secondline == 'freeze') {
  console.log(Math.min(+t_room, +t_cond));
} else if (secondline == 'heat') {
  console.log(Math.max(+t_room, +t_cond));
} else if (secondline == 'fan') {
  console.log(t_room);
}
