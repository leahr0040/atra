const fs = require('fs');



const write= fs.createWriteStream('./text.txt');
write.on("error", err =>console.log(err))
write.write("yes!!!\nthis is my file\nlike?")
write.on("close", () =>console.log("finish"))
write.end();