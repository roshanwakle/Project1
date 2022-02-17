const Decreasecounter = function(cnt)
{
    console.log("action is called");
    return {type:'COUNTER-DECREASE', payload:{countervalue:cnt}}
}

export default Decreasecounter;