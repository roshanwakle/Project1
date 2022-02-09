import React, { useState } from "react";
function CssDemo()
{
    const  [CssStyle,setCssStyle]=useState("");
    // const myStyle={"backgroundColor":"yellow"}
    const onColorChange=()=>{
    setCssStyle({color:"red"})
    }
    return(
        <>
        {/* <h1 style={{"color":"blue"}}>Roshan</h1>
        <h1 style={myStyle}>Css apply using Variable</h1> */}

        <h2 style={CssStyle}>Css apply using Variable</h2>
        <button onClick={onColorChange}>Click</button>
        </>
    )
}
export default CssDemo