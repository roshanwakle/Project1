const increasecounter =function(cnt)
{
    console.log("action is called")
    return { type :"COUNTER-INCREASE",payload:{countervalue:cnt }}
}

export default increasecounter;