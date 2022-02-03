import React,{Component} from "react";
class Branch extends Component{
    constructor(props)
    {
        super();

    }
    render()
    {
        let {fullname}=this.props
        return(
            <>
               <h1>{fullname.length ? fullname: 'Plese Enter your full Name'}</h1>
            </>
        );
    }
}
export default Branch;