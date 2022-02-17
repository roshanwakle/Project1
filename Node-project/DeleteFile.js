var fs=require("fs")

var fileName='abc.txt';
fs.unlink(fileName,(err)=>{
    console.log('file is deleted....')
})