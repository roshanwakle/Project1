// var fs=require('fs');

// console.log('start');

// fs.readFile('Newfile.txt',function(err,data)
// {
//     if(err)
//     throw err;
//     console.log("file Data "+data.toString())
// });
// console.log("end")

//Using Syncronous



var fs=require('fs');

console.log("start")
var data =fs.readFileSync("Newfile.txt");
console.log(data.toString());

console.log("end")
