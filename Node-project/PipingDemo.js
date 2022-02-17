var fs=require('fs')

var readStream=fs.createReadStream('Test.txt');

var WriteStream=fs.createWriteStream('pipewrite.txt');

readStream.pipe(WriteStream);

console.log('Done...')