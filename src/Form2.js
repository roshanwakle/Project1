import React,{Component} from "react";
class Form2 extends Component{
    constructor(){
        super();
        this.state={Contact:{Contactid:""}}
    }
    onChangeHandler=(event)=>{
       let {name,value}=event.target
       Contact.Contactid=value;
       this.setState({Contact});
    }
    render(){
       let { Contact }=this.state
        return(
            <>
            <h1>Contact Form</h1>
            <div className="form-group">
                <label>Contact Id</label>
                <input type="text" className="form-control" value={Contact.Contactid} onChange={this.onChangeHandler}></input>
            </div>
            </>
        );
    }
}
export default Form2;