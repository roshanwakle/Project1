import React,{Component} from "react";

class User1 extends Component{
    constructor(props)
    {
        super();
    }
    render()
    {
        return(
            <>
            <div>
            <h4>{this.props.PropertyName}</h4>
            <h4>{this.props.userRole}</h4>
            <h4>{this.props.Value}</h4> 
            </div>
            
            </>
        );
    }
}
export default User1;