var fs=require('fs');
fs.mkdir('./Rest',function(err)
{
    if(err)
    console.log(err);
    else{
        console.log('Directory is created successfully.......')
    }
})