import React ,{Component} from "react";
class Counter extends Component{
    constructor()
    {
    super();
    this.state={Total:0}
    }

    onBtnClick=(value)=>{
        let {Total}=this.state;
        Total=Total+value;
        this.setState({Total})
    }

    render()
    {
        let {Total}=this.state;
        return(
            <>
            <div>Total:{Total}</div>
            <button onClick={()=>this.onBtnClick(10)}>10</button>
            <button onClick={()=>this.onBtnClick(10)}>20</button>
            <button onClick={()=>this.onBtnClick(10)}>30</button>
            <button onClick={()=>this.onBtnClick(10)}>40</button>
            <button onClick={()=>this.onBtnClick(10)}>50</button>
            </>
        );
    }
}
export default Counter;
