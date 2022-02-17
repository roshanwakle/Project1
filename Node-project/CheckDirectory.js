var fs=require("fs")
fs.access("./Roshan",function(err)
{
    if(err)
    {
        console.log("Does not present..")
    }
    else
    {
        console.log("directory present.....")
    }
})