import React, {Component } from "react";
import Branch from "./Branch";
class Input1 extends Component{
    constructor()
    {
        super();
        this.state={FullName:' ',address:' '}
    }
    onInputChange=(event)=>{
        let {name,value}=event.target;
        console.log("input box changed" ,name,value)
        // this.setState({FullName:value})
        if(name==='FullName')
        {
           this.setState({FullName:value})
        }
        if(name==='address')
        {
           this.setState({address:value})
        }
    }
    render()
    {
        let {FullName,address}=this.state
        return(
            <>
            <div className="from-group">
            <Branch fullname={FullName}  />
                {/* <h1>{FullName}</h1> */}
                <label>Full Name</label>
                <input type="text" className="from-control" name='FullName' value={FullName} onChange={this.onInputChange}></input>

            </div>
            <div className="from-group">
                {/* <h1>{address}</h1> */}
                <label>Address</label>
                <input type="text"  name='address' className="from-control" value={address} onChange={this.onInputChange}></input>

            </div>
            </>
        );
    }
}
export default Input1;
