const os = require("os");  //import inbuild package
console.log("Free Memory", os.freemem() /1024/1024/1024);
console.log("Total Memory", os.totalmem() /1024/1024/1024);
console.log("OS Version", os.version());
console.log("CPUS", os.cpus());