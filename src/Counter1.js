import React,{ useState } from "react";
import increasecounter from "./action/increasecounter";
import Decreasecounter from "./action/Decreasecounter";
import store from "./store/store";
function Counter1()
{
    const [Count , setCount] =useState(10)

    const onIncreaseCounter =()=>
    {
        console.log("Counter component is called")
        store.dispatch(increasecounter(Count))
    }
    const onDecreseCounter =()=>
    {
        console.log("Counter component is called")
        store.dispatch(Decreasecounter(Count))
    }
    const onShowCounterValue =()=>{
        let Result= store.getState()
        console.log("result of get state",Result)
        let counter = Result.increasecounterValue;
        let decresecounter = Result.decresecounterValue;
        decresecounter--;
        counter++;
        console.log("Increase value",counter,"Decrse value" ,decresecounter)
    }
    return(
        <>
        <h4>Counter</h4>
        <button onClick={onIncreaseCounter}>Increase Counter</button>
        <button onClick={onDecreseCounter}>Decrease value</button>
        <button onClick={onShowCounterValue}>Conter value</button>
        </>
    )
}
export default Counter1