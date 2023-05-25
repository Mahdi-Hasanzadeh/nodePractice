const os = require("os");

//userInfo
console.log(os.userInfo());

//the system uptime in seconds

console.log(`System uptime  is ${os.uptime()}`);

//returns informatin about each logical CPU Core
console.log(os.cpus());

const currentOS = {
  name: os.type(), //return the operatin system name
  totalMemory: os.totalmem(), //total memory of the system in bytes
  freeMemory: os.freemem(), // amount of free memory in bytes
};

console.log(currentOS);
