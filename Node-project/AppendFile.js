var fs=require("fs");
fs.appendFileSync('output.txt','Append data in file',function(err)
{
    if(err)
    console.log(err)
    console.log("append is done....")
})