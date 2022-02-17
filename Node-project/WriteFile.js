var fs= require("fs");
var data="'Hi i am Roshan Wakle'"
fs.writeFile("output.txt",data,function(err)
{
    if(err)
    console.log(err);
    console.log("write Opertaion is done.....")
})