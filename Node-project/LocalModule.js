var log = {
    information : function(information)
    {
         console.log("information"+information)
    },
    warning: function (warning)
    {
        console.log("warning "+warning)
    },
    error: function (error)
    {
        console.log("error"+error)
    } 
}
module.exports=log;