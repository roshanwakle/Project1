import React, {Component} from "react";
class CheckBox1 extends Component{
    constructor()
    {
        super();
        this.state={trnchecked:false}
    }
    onCheck=()=>{
        let {trnchecked} =this.state;
        this.setState({trnchecked:!trnchecked});
    }

    render()
    {
        let {trnchecked}=this.state;
        return(
            <>
            {/* <h1>{Name}</h1> */}
            Training:<input type="checkbox" checked={trnchecked}></input>
            <button onClick={this.onClick}>Check</button>
            </>
        )
    }
}
export default CheckBox1;